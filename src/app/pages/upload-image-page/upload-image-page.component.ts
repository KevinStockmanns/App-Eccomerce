import { Component } from '@angular/core';
import { Producto, Version } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../../core/constants';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-upload-image-page',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule],
  templateUrl: './upload-image-page.component.html',
  styleUrl: './upload-image-page.component.css'
})
export class UploadImagePageComponent {
  producto:Producto;
  fromCrear: boolean = true;
  iconChevron = faChevronDown;
  imgUrl = IMG_URL;
  selectedImages: { [versionId: number]: string } = {};

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private noti: NotificationService
  ){
    this.producto = productoService.productoSelected;
    this.fromCrear = activatedRoute.snapshot.queryParamMap.get('a') == 'c';
    
    
  }



  onFileSelected(event: Event, version: Version): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      let permitedTypes = ['image/jpeg', 'image/png', 'image/webp'];

      if(input.files.length !== 1){
        this.noti.notificate('Solo se puede subir un archivo a la vez', {error:true});
        return;
      }
      if(!permitedTypes.includes(file.type)){
        this.noti.notificate('El formato del archivo no es válido. Acepta jpeg, png o webp', {error:true});
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImages[version.id] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
