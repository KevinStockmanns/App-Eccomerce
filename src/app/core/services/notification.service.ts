import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notifications: BehaviorSubject<[{type: string, message:string, title:string, error:boolean, time: number}]|[]>;
  private notifcationList: [{type: string, message:string, title:string, error:boolean, time: number}]|[] = [];
  private timeout: [message:string, timeout: any]|[] = [];

  private _modal: BehaviorSubject<{title:string, desc:string, motivate:boolean}|null>;
  private _modalResponse: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this._notifications = new BehaviorSubject<[{type: string, message:string, title:string, error:boolean, time:number}]|[]>([]);

    this._modal = new BehaviorSubject<any>(null);
   }


  notificate(message:string, options?:any){
    const defaultOptions = {
      type: 'simple',
      title: '',
      error: false,
      time: 5000,
      message: message
    }

    const defOptions: any = Object.assign({}, defaultOptions, options);
    let isInList = this.notifcationList.find(el=>el.message.trim() == message.trim());
    if(isInList){
      this.timeout = this.timeout.filter(el=> el.message != message) as any;
    }else{
      this.notifcationList.push(defOptions as never);
    }
    this._notifications.next(this.notifcationList);

    let hasTimeOut = this.timeout.find(el=>el.message == message);
    if(hasTimeOut){
      hasTimeOut.timeout = clearInterval(hasTimeOut.timeout);
      this.timeout = this.timeout.filter(el=> el.message != message) as never;
    }
    if(defOptions.time > 0){
      this.timeout.push({
        message: message,
        timeout: setTimeout(() => {
          this.timeout = this.timeout.filter(el=> el.message != message) as any;
          this.notifcationList = this.notifcationList.filter(el=> el.message !== message) as any;
          this._notifications.next(this.notifcationList);
          // console.log("DEBERIA CERRARSE");
          
        }, defOptions.time)
      } as never)
    }
    // console.log(this.timeout);
    
  }

  closeNotification(){
    this.timeout = [];
    this._notifications.next([]);
  }


  openModal(options: {title:string, desc: string, motivate:boolean}): Observable<boolean>{
    const defaultOptions = {
      title: "Sin titulo",
      desc: "desc",
      motivate: true
    }

    const newOption = Object.assign({}, defaultOptions, options);

    this._modal.next(newOption);
    
    return new Observable(obs=>{
      this._modalResponse.subscribe(res=>{
        obs.next(res);
        obs.complete();
      })
    })
  }
  closeModal(){
    this._modal.next(null);
  }
  confirmModal(){
    this._modalResponse.next(true);
  }
  rejectModal(){
    this._modalResponse.next(false);
  }



  private formatMessage(message:string):string{
    console.log(message.replaceAll(' ', ''));
    
    return message.replaceAll(' ', '');
  }


  get notifications(){
    return this._notifications.asObservable();
  }
  get modal(){
    return this._modal.asObservable();
  }
}
