import { Component } from '@angular/core';
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
import {
  Errors,
  ResponseWrapper,
} from '../../core/models/response-wrapper.model';
import { UtilsService } from '../../core/services/utils.service';
import { LoaderComponent } from '../../components/loader/loader.component';

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
export class CreateProductPageComponent {
  form: FormGroup;
  updatePage: boolean = false;
  iconPlus = faPlus;
  iconTrash = faTrash;
  totalVersiones: number = 0;
  deleteMood: boolean = false;
  loading: boolean = false;
  id = 0;

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
    // if(!this.updatePage){
    this.form = formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s]+'),
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      versiones: formBuilder.array([], Validators.required),
    });

    this.addVersion();
    this.totalVersiones = 1;
    // }
  }

  activateDeleteMood() {
    if (this.totalVersiones > 1) this.deleteMood = !this.deleteMood;
    else if (this.deleteMood) this.deleteMood = false;
  }
  delete(i: number) {
    const versiones = this.form.get('versiones') as FormArray;

    if (versiones) {
      versiones.removeAt(i);
      this.totalVersiones = versiones.length;

      console.log(i);

      if (this.totalVersiones <= 1) {
        this.deleteMood = false;
      }
    } else {
      console.error('FormArray "versiones" no encontrado');
    }
  }
  addVersion() {
    (this.form.get('versiones') as any).push(
      this.formBuilder.group({
        nombre: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s]+'),
            Validators.minLength(4),
            Validators.maxLength(50),
            this.uniqueVersion(),
          ],
        ],
        descripcion: [
          '',
          [
            Validators.pattern(
              '[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\\s\\-\\_\\.\\(\\)\\¿\\?\\¡\\!]+'
            ),
            Validators.minLength(15),
            Validators.maxLength(2000),
          ],
        ],
        precio: [10000, [Validators.required, Validators.min(1)]],
        precioDescuento: [null, Validators.min(0)],
        stock: [1, Validators.min(1)],
        estado: [false]
      })
    );
    this.totalVersiones++;
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

    let json = this.form.value;
    json = this.utils.deleteObjectEmpty(json);
    if (this.form.valid) {
      this.loading = true;
      if (this.updatePage) {
      } else {
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

  idUnique() {
    this.id++;
    return this.id;
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
}
