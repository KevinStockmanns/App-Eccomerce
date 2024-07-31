import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'back-btn',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './back-btn.component.html',
  styleUrl: './back-btn.component.css'
})
export class BackBtnComponent {
  iconBack = faChevronLeft;
  iconHome = faHome;
  @ViewChild('backBtnComponent') element: ElementRef|undefined;
  
  constructor(private location: Location){}

  back(){
    this.location.back();
  }

  expandAnimation(e: MouseEvent){
    const el: HTMLElement = this.element?.nativeElement as HTMLElement;
    // console.log(e.target);
    // console.log(e);
    
    
  }
}
