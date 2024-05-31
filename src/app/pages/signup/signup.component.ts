import { Component, SimpleChanges } from '@angular/core';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';
import { VentajasUsuarioComponent } from '../../components/ventajas-usuario/ventajas-usuario.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';
import { UbicacionService } from '../../core/services/ubicacion.service';
import { Localidad, Provincia } from '../../core/models/ubicacion.model';
import { NotificationService } from '../../core/services/notification.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, BackBtnComponent, VentajasUsuarioComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  isInRegister: boolean = false;
  loading:boolean = false;
  error: [{campo:string, error:string}]|[] = [];

  provincias: Provincia[] = [];
  localidades: Localidad[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private ubicacionService: UbicacionService,
    private notification: NotificationService
  ){
    this.signupForm = this.formBuilder.group({
      nombre: ['', [
        Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+'), Validators.minLength(4), Validators.maxLength(50)]
      ],
      apellido: ['', [
        Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+'), Validators.minLength(3), Validators.maxLength(70)
      ]],
      correo: ['', [
        Validators.required, Validators.email
      ]],
      telefono: ['', [
        Validators.required, Validators.pattern('(\\+\\d{2,4})?\\s?\\d{3,4}\\s\\d{6,8}')
      ]],
      clave: ['', [
        Validators.required, Validators.pattern('[a-zA-Z\\d\\_\\-]+') , Validators.minLength(8), Validators.maxLength(20)
      ]],
      clave2: ['', [
        Validators.required, Validators.pattern('[a-zA-Z\\d\\_\\-]+') , Validators.minLength(8), Validators.maxLength(20), this.validarClave
      ]],
      fechaNacimiento: ['', [
        Validators.required,
        this.isAdult
      ]],
      pais: ['Argentina', [Validators.required]],
      provincia: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    })

    this.ubicacionService.getProvincias().subscribe({
      next: res=>{
        this.provincias = res.provincias.sort((a,b) => {
          if(a.nombre < b.nombre) return -1;
          if(a.nombre > b.nombre) return 1;
          return 0;
        });
      }
    })


    this.signupForm.get('provincia')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: prov=> {
          console.log(prov);
          if(prov){
            ubicacionService.getLocalidades(prov).subscribe(res=>{
              this.localidades = res.municipios.sort((a,b)=>{
                if( a.nombre < b.nombre) return -1;
                if( a.nombre > b.nombre) return 1;
                return 0;
              });
            });
          }else{
            this.localidades = [];
          }
        }
      })
  }

  



  onSubmit(){
    
    if(this.signupForm.valid){
      this.loading = true;
      let json = this.signupForm.value;
      delete json.clave2;
      json.ubicacion = `${json.pais}/-/${json.provincia}/-/${json.localidad}/-/${json.barrio}/-/${json.direccion}`;
      delete json.pais;
      delete json.provincia;
      delete json.localidad;
      delete json.barrio;
      delete json.direccion;

      this.usuarioService.signup(json).subscribe({
        error: err=> {
          this.error = err.error.errors;
          this.loading = false;
        },
        next: res=>{
          this.error = [];
          this.loading = false;
        }
      });
    }else{
      this.signupForm.markAllAsTouched();
    }
  }
  

  isAdult(control:any): any{
    const ahora = new Date();
    const nacimiento = new Date(control.value);
    nacimiento.setMinutes(nacimiento.getTimezoneOffset());
    let edad = ahora.getFullYear() - nacimiento.getFullYear();
    let mes = ahora.getMonth() - nacimiento.getMonth();

    if(mes < 0 || (mes == 0 && ahora.getDate() < nacimiento.getDate()))
      edad--;

    return edad < 18 ? {underage: {requiredAge: 18}} : null;
  }
  validarClave(control: any): any{
    if(control?.parent?.get('clave')?.value === control?.parent?.get('clave2')?.value)
      return null;
    return {repeatClave: true};
  }



  hasValue(controlName: string):boolean{
    return this.signupForm.get(controlName)?.value;
  }
  hasError(controlName: string, errorName:string){
    return this.signupForm.get(controlName)?.hasError(errorName) && this.signupForm.get(controlName)?.touched;
  }
  getError(controlName: string, error: string): any{
    return (this.signupForm.get(controlName)?.errors as any)[error];
  }
  hasOneError(controlName: string){
    return !this.signupForm.get(controlName)?.valid && this.signupForm.get(controlName)?.touched;
  }
  wasTouched(controlName: string){
    return this.signupForm.get(controlName)?.touched;
  }
}
