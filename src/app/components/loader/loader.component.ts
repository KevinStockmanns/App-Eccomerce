import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loader" [style.width]="size" [style.height]="size"></div>
  `,
  styles: `
    .loader{
      justify-self:center;
      align-self:center;
      margin: 0 auto;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top: 2px solid var(--mainColor);
      animation: rotate 1s ease-in-out infinite;
    }

    @keyframes rotate {
      0%{
        transform: rotate(0);
      }
      100%{
        transform: rotate(360deg);
      }
    } 
  `
})
export class LoaderComponent {
  @Input() size:string = "2rem";
}
