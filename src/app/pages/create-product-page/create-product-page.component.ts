import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductoService } from '../../core/services/producto.service';
import { NotificationService } from '../../core/services/notification.service';
import { Errors } from '../../core/models/response-wrapper.model';
import { UtilsService } from '../../core/services/utils.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Producto, Version } from '../../core/models/producto.model';
import { Subscription } from 'rxjs';
import { updateItemInCache } from '../../core/interceptor/cache.interceptor';

@Component({
  selector: 'app-create-product-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BackBtnComponent,
    FontAwesomeModule,
    LoaderComponent,
  ],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.css',
})
export class CreateProductPageComponent implements OnDestroy, AfterViewInit {
  form: FormGroup;
  updatePage: boolean = false;
  iconPlus = faPlus;
  iconTrash = faTrash;
  totalVersiones: number = 0;
  deleteMood: boolean = false;
  loading: boolean = false;
  idIncrementer = 0;
  initValue: any | null = null;
  subscriptionVersiones: Subscription|null = null;
  producto:Producto|null = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private notiService: NotificationService,
    private utils: UtilsService,
    private router: Router
  ) {
    this.updatePage =
      activatedRoute.snapshot.paramMap.get('action') == 'update';

    if(!this.updatePage)
      productoService.setProductoSelected(null);
    this.form = formBuilder.group({
      nombre: [
        productoService.productoSelected?.nombre || '',
        [
          Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s]+'),
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      versiones: formBuilder.array([], Validators.required),
    });

    if (this.updatePage) {
      this.producto = productoService.productoSelected;
      this.addVersion(this.productoService.productoSelected?.versiones);
      this.form.addControl(
        'estado',
        this.formBuilder.control(this.productoService.productoSelected?.estado)
      );
      this.initValue = this.form.value;
    } else this.addVersion();
  }

  ngAfterViewInit(): void {
    this.subscribeToVersionesChanges();

  }
  ngOnDestroy(): void {
    // if (this.updatePage) this.productoService.setProductoSelected(null);
    if(this.subscriptionVersiones) this.subscriptionVersiones.unsubscribe();
  }

  subscribeToVersionesChanges() {
    const versionesArray = this.form.get('versiones') as FormArray;
    this.subscriptionVersiones = versionesArray.valueChanges.subscribe(() => {
      this.totalVersiones = versionesArray.value.length;
    });
  }

  activateDeleteMood() {
    if (this.totalVersiones > 0) this.deleteMood = !this.deleteMood;
    else if (this.deleteMood) this.deleteMood = false;
  }
  delete(i: number) {
    const versiones = this.form.get('versiones') as FormArray;

    if (versiones) {
      if (this.updatePage) {
        let version = versiones.at(i) as FormGroup;
        if(version.value.hasOwnProperty('accion'))
          if(version.value.idVersion && version.value.idVersion!=0){
            version.removeControl('accion');
          }else{
            versiones.removeAt(i);
          }
        else
          version.addControl('accion', this.formBuilder.control('ELIMINAR'));
        
      } else {
        versiones.removeAt(i);
        if (this.totalVersiones <= 1) {
          this.deleteMood = false;
        }
      }
    }
  }
  addVersion(versiones?: Version[]) {
    if (!versiones)
      versiones = [
        {
          nombre: '',
          descripcion: '',
          precio: 0,
          precioDescuento: 0,
          stock: 0,
          estado: false,
          fecha: '',
          id: 0,
          imagen: null,
        },
      ];

    versiones?.forEach((ver) => {
      (this.form.get('versiones') as any).push(
        this.formBuilder.group({
          idVersion: [ver.id == 0 ? null : ver.id],
          nombre: [
            ver.nombre || '',
            [
              Validators.required,
              Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s]+'),
              Validators.minLength(4),
              Validators.maxLength(50),
              this.uniqueVersion(),
            ],
          ],
          descripcion: [
            ver.descripcion || '',
            [
              Validators.pattern(
                '[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s\\-\\_\\.\\(\\)\\¿\\?\\¡\\!]+'
              ),
              Validators.minLength(15),
              Validators.maxLength(2000),
            ],
          ],
          precio: [
            ver.precio || 10000,
            [Validators.required, Validators.min(1)],
          ],
          precioDescuento: [ver.precioDescuento || null, Validators.min(0)],
          stock: [ver.stock || 1, Validators.min(1)],
          estado: [ver.estado || false],
        })
      );
      if (ver.id == 0)
        (
          (this.form.get('versiones') as FormArray).at(
            (this.form.get('versiones') as FormArray).length - 1
          ) as FormGroup
        ).addControl('accion', this.formBuilder.control('AGREGAR'));
    });
  }
  uniqueVersion(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        !control ||
        !control.parent ||
        !(control.parent.parent instanceof FormArray)
      ) {
        return null;
      }

      const formArray = control.parent.parent as FormArray;
      const names = formArray.controls.map((group: any) =>
        group.get('nombre').value.trim().toLowerCase()
      );
      const nameOccurrences = names.filter(
        (name) => name === control.value.trim().toLowerCase()
      ).length;

      return nameOccurrences > 1 ? { duplicateVersion: true } : null;
    };
  }

  onSubmit() {
    this.form.markAllAsTouched();
    this.deleteMood = false;

    let json = this.form.value;
    if (this.form.valid) {
      this.loading = true;
      if (this.updatePage) {
        if (JSON.stringify(this.initValue) != JSON.stringify(json)) {
          console.log('Hubo cambio');
          json = this.utils.getChanges(this.initValue, json, ['idVersion'], 'idVersion');
          json = this.utils.deleteObjectEmpty(json);
          if (json.versiones)
            json.versiones = this.removeIfOnlyHas(json.versiones, 'idVersion');
          json = this.utils.deleteObjectEmpty(json);
          if(json.versiones)
            json.versiones.forEach((el:any)=>{
              if(!el.hasOwnProperty('accion'))
                el.accion = 'ACTUALIZAR';
            })
          
          console.log(this.productoService.productoSelected);
          
          console.log(json);
          
          
          this.productoService.updateProducto(this.productoService.productoSelected?.id as number, json).subscribe({
            next: res=>{
              this.loading = false;
              updateItemInCache(res.body, 'producto');
              if(this.hasOneCreation(json.versiones || [])){
                this.productoService.setProductoSelected(res.body);
                this.redirectToImages('u');
              }else{
                this.notiService.notificate('Producto actualizado con éxito.', {time:3000});
                this.router.navigate(['/productos']);
              }
            },
            error: err=>{
              this.loading = false;
              if(err.error?.errors){
                err.error.errors.forEach((el:Errors)=>{
                  this.notiService.notificate(el.error, {error:true});
                })
              }else{
                this.notiService.notificate('Ocurrio un error al actualizar el producto.', {error:true});
              }
            }
          });
        } else {
          this.notiService.notificate('No se detectaron cambios para actualizar.', { error: true, time: 3000 });
          this.loading = false;
        }

      } else {
        json = this.utils.deleteObjectEmpty(json);
        this.productoService.createProducto(json).subscribe({
          next: (res) => {
            console.log(res);
            this.productoService.setProductoSelected(res.body);
            this.router.navigate(['/productos/versiones/images'], {
              queryParams: { a: 'c' },
            });
            this.loading = false;
          },
          error: (err) => {
            console.log(err);
            if (err.error.errors) {
              err.error.errors.forEach((el: Errors) => {
                this.notiService.notificate(el.error, { error: true });
              });
            } else {
              this.notiService.notificate(
                'Ocurrio un error al crear el producto',
                { error: true }
              );
            }
            this.loading = false;
          },
        });
      }
    }
  }
  removeIfOnlyHas(versiones: any[], el: string) {
    return versiones.filter((ver) => {
      return !(Object.keys(ver).length === 1 && ver.hasOwnProperty(el));
    });
  }
  idUnique() {
    this.idIncrementer++;
    return this.idIncrementer;
  }
  toggleBtn(control: string, i?: number) {
    if (i == undefined) {
      this.form.get(control)?.setValue(!this.form.get(control)?.value);
    } else {
      let controlVer = this.form.get('versiones') as FormArray;
      controlVer
        .at(i)
        .get(control)
        ?.setValue(!controlVer.at(i).get(control)?.value);
    }
  }
  getVersionesForm() {
    return (this.form.get('versiones') as FormArray).controls;
  }
  hasValue(controlName: string, i?: number) {
    if (i == undefined) return this.form.get(controlName)?.value;

    let value = (this.form.get('versiones') as FormArray)
      .at(i)
      .get(controlName)?.value;
    return value || value === 0;
  }
  hasVersionValue(i: number, control: string) {
    return (this.form.get('versiones') as FormArray).at(i).get(control)?.value;
  }
  hasError(control: string, error: string, i?: number) {
    if (i == undefined)
      return (
        this.form.get(control)?.hasError(error) &&
        this.form.get(control)?.touched
      );

    let verControl = (this.form.get('versiones') as FormArray)
      .at(i)
      .get(control);
    return verControl?.hasError(error) && verControl.touched;
  }
  hasOneError(control: string, i?: number) {
    if (i == undefined)
      return this.form.get(control)?.invalid && this.form.get(control)?.touched;

    let verControl = (this.form.get('versiones') as FormArray)
      .at(i)
      .get(control);
    return verControl?.invalid && verControl.touched;
  }
  getError(control: string, error: string, i?: number) {
    if (i == undefined) return (this.form.get(control)?.errors as any)[error];

    let verControl = (
      (this.form.get('versiones') as FormArray).at(i).get(control)
        ?.errors as any
    )[error];
    return verControl;
  }

  get productoId() {
    return this.productoService.productoSelected?.id;
  }


  redirectToImages(accion:string){
    this.router.navigate(['/productos/versiones/images'], {
      queryParams: { a: accion },
    });
  }
  private hasOneCreation(versiones:any[]):boolean{
    for (let i = 0; i < versiones.length; i++) {
      const element = versiones[i];
      if(element.hasOwnProperty('accion') && element['accion']=="AGREGAR")
        return true;
    }

    return false;
  }
}
