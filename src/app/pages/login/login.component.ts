import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';
import { VentajasUsuarioComponent } from '../../components/ventajas-usuario/ventajas-usuario.component';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, VentajasUsuarioComponent, BackBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  error: [{campo:string|null, error:string}]|[];

  constructor(private formBuilder:FormBuilder, private usuarioService: UsuarioService, private route: Router){
    this.error = [];
    console.log(this.error);
    
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\_\-]{8,20}')]]
    })
  }


  onSubmit(){
    this.isLoading = true;
    this.loginForm.markAllAsTouched();
    this.usuarioService.login(this.loginForm.value).subscribe({
      next: res=> this.isLoading = false,      
      error: (err)=> {
        this.isLoading = false;
        console.log(err);
        
        this.error = err.error.errors || [];
      }
    });
  }

  hasErrorResponse(){
    
  }

  hasErrors(controlName: string, error: string){
    return (this.loginForm.get(controlName)?.hasError(error) && this.loginForm.get(controlName)?.touched);
  }
  getError(controlName:string, error:string): any{
    return (this.loginForm.get(controlName)?.errors as any)[error];
  }
  hasValue(controlName: string):boolean{
    return this.loginForm.get(controlName)?.value;
  }
}
