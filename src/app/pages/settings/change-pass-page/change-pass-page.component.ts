import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Errors } from '../../../core/models/response-wrapper.model';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-change-pass-page',
  standalone: true,
  imports: [ReactiveFormsModule, LoaderComponent],
  templateUrl: './change-pass-page.component.html',
  styleUrl: './change-pass-page.component.css'
})
export class ChangePassPageComponent {

  form:FormGroup;
  loading:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private usuarioService: UsuarioService,
    private noti: NotificationService
  ){
    this.form= formBuilder.group({
      claveOriginal: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\_\-]+'), Validators.minLength(8), Validators.maxLength(20)]],
      claveNueva: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\_\-]+'), Validators.minLength(8), Validators.maxLength(20), this.notRepeatClave()]],
      claveNueva2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\_\-]+'), this.repeatClave(), Validators.minLength(8), Validators.maxLength(20)]],
    });

    this.form.get('claveOriginal')?.valueChanges.subscribe(()=>{
      this.form.get('claveNueva')?.updateValueAndValidity();
    });
    this.form.get('claveNueva')?.valueChanges.subscribe(() => {
      this.form.get('claveNueva2')?.updateValueAndValidity();
    });
  }


  onCancelar(){
    this.location.back();
  }
  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      let json = this.form.value;
      delete json.claveNueva2;
      this.loading = true;
      this.usuarioService.changePassword(json).subscribe({
        next: ()=>{
          this.loading = false;
          this.noti.notificate('La clave se ha cambiado con éxito.');
        },
        error: err=>{
          this.loading = false;
          if(err.error?.errors){
            err.error.errors.forEach((el:Errors)=> this.noti.notificate(el.error), {error:true});
          }else{
            this.noti.notificate('Ocurrio un error al cambiar la clave', {error:true});
          }
        }
      });
    }
  }


  repeatClave(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!this.form)
          return null;
      const claveNueva = this.form.get('claveNueva')?.value;
      if (control.value && control.value !== claveNueva) {
        return { repeatClave: true };
      } else {
        return null;
      }
    };
  }
  notRepeatClave(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors|null=>{
      if(!this.form)
        return null;

      if(control.value && control.value === this.form.get('claveOriginal')?.value)
        return {notRepeatClave: true};
      else 
        return null;
    }
  }


  hasValue(control:string){
    return this.form.get(control)?.value;
  }
  hasOneError(control:string){
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }
  hasError(control:string, error:string){
    return this.form.get(control)?.hasError(error) && this.form.get(control)?.touched;
  }
  getError(control:string, error:string){
    return (this.form.get(control) as any).errors[error];
  }
}
