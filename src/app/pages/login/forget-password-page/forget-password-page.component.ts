import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { UsuarioService } from '../../../core/services/usuario.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamation, faExclamationCircle, faSign } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/services/notification.service';
import { Errors } from '../../../core/models/response-wrapper.model';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-forget-password-page',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './forget-password-page.component.html',
  styleUrl: './forget-password-page.component.css'
})
export class ForgetPasswordPageComponent {
  iconAdvert = faExclamationCircle;
  form: FormGroup;
  loading:boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private location: Location,
    private formBuilder: FormBuilder,
    private noti: NotificationService
  ){
    this.form = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('(\\+\\d{2,4})?\\s?\\d{3,4}\\s\\d{6,8}')]],
      fechaNacimiento: [(new Date()).toISOString().split('T')[0], [Validators.required]]
    })
  }


  onCancelar(){
    this.location.back();
  }
  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.loading = true;
      let json = this.form.value;
      json.fechaNacimiento = new Date(json.fechaNacimiento).toISOString().split('T')[0];
      this.usuarioService.forgetPassword(json).subscribe({
        next: ()=>{
          this.loading = false;
          this.noti.notificate('La clave se ha cambiado con éxito, revisa tu correo.', {time:10000});
        },
        error: err=>{
          this.loading = false;
          if(err.error?.errors){
            err.error.errors.forEach((el: Errors)=>{
              this.noti.notificate(el.error, {error:true, time:7000});
            })
          }else{
            this.noti.notificate('Ocurrio un error. Intentalo de nuevo más tarde', {error:true});
          }
        }
      });   
    }
    
    
  }


  hasOneError(control:string){
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }
  hasError(control:string, error:string){
    return this.form.get(control)?.hasError(error) && this.form.get(control)?.touched;
  }
  hasValue(control:string){
    return this.form.get(control)?.value;
  }
}
