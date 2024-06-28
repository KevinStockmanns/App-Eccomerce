import { Component, Signal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/models/usuario.model';
import { Location } from '@angular/common';
import { UtilsService } from '../../../core/services/utils.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Errors } from '../../../core/models/response-wrapper.model';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-update-user-page',
  standalone: true,
  imports: [ReactiveFormsModule, LoaderComponent],
  templateUrl: './update-user-page.component.html',
  styleUrl: './update-user-page.component.css'
})
export class UpdateUserPageComponent {

  form:FormGroup
  usuario: Signal<Usuario|null>;
  loading:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private location: Location,
    private utils:UtilsService,
    private noti: NotificationService
  ){
    if(usuarioService.isAdmin() && usuarioService.usuarioSelected)
      this.usuario = signal(usuarioService.usuarioSelected).asReadonly();
    else
      this.usuario = usuarioService.usuario;


    const fechaNacimiento = this.usuario()?.fechaNacimiento 
      ? this.toIsoString(new Date(this.usuario()?.fechaNacimiento as string))
      : '';

    

    this.form = formBuilder.group({
      nombre: [this.usuario()?.nombre || '', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+'), Validators.minLength(4), Validators.maxLength(50)]],
      apellido: [this.usuario()?.apellido || '', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+'), Validators.minLength(3), Validators.maxLength(70)]],
      correo: [this.usuario()?.correo || '', [Validators.required, Validators.email]],
      telefono: [this.usuario()?.telefono || '', [Validators.required, Validators.pattern('(\\+\\d{2,4})?\\s?\\d{3,4}\\s\\d{6,8}')]],
      fechaNacimiento: [fechaNacimiento, [Validators.required, this.isAdult()]]
    })
  }
  isAdult(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors|null=>{
      if(!control.value)
        return null;
      const ahora = new Date();
      const nacimiento = new Date(control.value);
      nacimiento.setMinutes(nacimiento.getTimezoneOffset());
      let edad = ahora.getFullYear() - nacimiento.getFullYear();
      let mes = ahora.getMonth() - nacimiento.getMonth();

      if(mes < 0 || (mes == 0 && ahora.getDate() < nacimiento.getDate()))
        edad--;

      return edad < 18 ? {underage: {requiredAge: 18}} : null;
    }
  }

  toIsoString(date:Date){
    return date.toISOString().split('T')[0];
  }


  onCancelar(){
    this.location.back();
  }
  onSubmit(){
    let orginalUsuario: any = this.usuario();
    orginalUsuario.fechaNacimiento = this.toIsoString(new Date(this.usuario()?.fechaNacimiento as string));
    let json = this.utils.getChanges(orginalUsuario, this.form.value);
    this.form.markAllAsTouched();
    
    if(this.form.valid){
      if(JSON.stringify(json) !== "{}"){
        this.loading = true;
        this.usuarioService.updateUser(this.usuario()?.id as number, json).subscribe({
          next: ()=>{
            this.noti.notificate('Información del perfil actualizada con éxito');
            for(const key in json){
              if(orginalUsuario.hasOwnProperty(key))
                orginalUsuario[key] = json[key];
            }
            this.usuarioService.setUsuario(orginalUsuario as Usuario);
            this.location.back();
            
          },
          error:err=>{
            this.loading = false;
            if(err.error?.errors){
              err.error?.errors.forEach((el:Errors)=>{
                this.noti.notificate(el.error, {error:true, time:10000});
              })
            }else{
              this.noti.notificate('Ocurrio un error al intentar actualizar el usuario. Intentalo más tarde.', {error:true});
            }
          }
        })
      }else{
        this.noti.notificate('No se detectaron cambios para actualizar.', {error:true});
      }
    }
    

  }

  hasOneError(control:string){
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }
  hasError(control:string, error:string){
    return this.form.get(control)?.hasError(error) && this.form.get(control)?.touched;
  }
  getError(control: string, error:string){
    return (this.form.get(control)?.errors as any)[error];
  }
  hasValue(control:string){
    return this.form.get(control)?.value;
  }
}
