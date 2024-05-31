import { Component } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  notifications: [{type: string; message: string; title: string, time:number, error:boolean}]|[] = [];
  iconClose = faClose;

  modal: {title:string, desc:string, motivate:boolean}|null = null;

  constructor(private notificationService: NotificationService){
    notificationService.notifications.subscribe(el=> {
      this.notifications = el;
    });
    notificationService.modal.subscribe(el=> this.modal = el);
  }


  close(){
    this.notificationService.closeNotification();
  }

  cancelModal(){
    this.notificationService.rejectModal();
    this.notificationService.closeModal();
  }
  confirmModal(){
    this.notificationService.confirmModal();
    this.notificationService.closeModal();
  }
}
