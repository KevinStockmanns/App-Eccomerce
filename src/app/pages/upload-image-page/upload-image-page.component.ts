import { Component } from '@angular/core';
import { Producto, Version } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faChevronDown,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../../core/constants';
import { NotificationService } from '../../core/services/notification.service';
import { Errors } from '../../core/models/response-wrapper.model';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BackBtnComponent } from '../../components/back-btn/back-btn.component';

@Component({
  selector: 'app-upload-image-page',
  standalone: true,
  imports: [BackBtnComponent, FontAwesomeModule, LoaderComponent, RouterModule],
  templateUrl: './upload-image-page.component.html',
  styleUrl: './upload-image-page.component.css',
})
export class UploadImagePageComponent {
  producto: Producto;
  fromCrear: boolean = true;
  iconChevron = faChevronDown;
  iconCheck = faCheck;
  iconNotCheck = faClose;
  imgUrl = IMG_URL;
  selectedImages: { [versionId: number]: string } = {};
  realImages: { [versionId: number]: File } = {};
  imagenCharged: { [versionId: number]: boolean } = {};
  versionOpen = 0;
  loading = false;
  loadingResponse = false;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private noti: NotificationService
  ) {
    this.producto = productoService.productoSelected as Producto;
    this.fromCrear = activatedRoute.snapshot.queryParamMap.get('a') == 'c';
    this.imagenCharged = JSON.parse(
      localStorage.getItem('imagenCharged') || '{}'
    );
  }

  onFileSelected(event: Event, version: Version): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      let permitedTypes = ['image/jpeg', 'image/png', 'image/webp'];

      if (input.files.length !== 1) {
        this.noti.notificate('Solo se puede subir un archivo a la vez', {
          error: true,
        });
        return;
      }
      if (!permitedTypes.includes(file.type)) {
        this.noti.notificate(
          'El formato del archivo no es válido. Acepta jpeg, png o webp',
          { error: true }
        );
        return;
      }

      this.realImages[version.id] = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImages[version.id] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(idVersion: number, activar?: boolean) {
    let file = this.realImages[idVersion];
    console.log(file);
    console.log(idVersion);
    if (file) {
      this.loading = true;
      const fromData = new FormData();
      fromData.append('imagen', file);

      this.productoService.uploadImage(fromData, idVersion, activar).subscribe({
        next: (res) => {
          this.imagenCharged[idVersion] = true;
          localStorage.setItem(
            'imagenCharged',
            JSON.stringify(this.imagenCharged)
          );
          this.loading = false;
        },
        error: (err) => {
          if (err.error?.errors) {
            err.error.errors.forEach((el: Errors) =>
              this.noti.notificate(el.error, { error: true })
            );
            this.loading = false;
          } else {
            this.noti.notificate('Ocurrio un error al subir la imagen', {
              err: true,
            });
            this.loading = false;
          }
        },
      });
    }
  }

  openVersion(idVersion: number) {
    if (this.versionOpen == idVersion) this.versionOpen = 0;
    else this.versionOpen = idVersion;
  }

  onFinish() {
    localStorage.removeItem('imagenCharged');
  }
  onActivar() {
    this.loadingResponse = true;
    this.productoService
      .activateProduct(this.producto.id, { all: false })
      .subscribe({
        next: (res) => {
          this.loadingResponse = false;
          this.router.navigate(['/productos'])
        },
        error: (err) => {
          this.loadingResponse = false;
          if (err.error?.errors) {
            err.error.errors.forEach((err: Errors) => {
              this.noti.notificate(err.error, { error: true });
            });
          } else {
            this.noti.notificate('Ocurrio un error al activar el producto', {
              error: true,
            });
          }
        },
      });
  }
  onListo(){
    this.onFinish();
    this.router.navigate(['/productos']);
  }


  oneToUpload(){
    return this.producto.versiones.some(v=> v.imagen ==null);
  }
}
