import { Component } from '@angular/core';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [],
  template: `
  <section class="settings">
    <h2 class="title">Ajustes</h2>
    <img src="assets/images/settings.svg" alt="Imagen de ajustes">
  </section>
  `,
  styles: `
    .settings{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      gap: 1rem;
      width:100%;
      height:100%;
      max-width:400px;
      margin: 0 auto;
    }
    img{
      padding: 1rem;
      border-radius: var(--borderrMid);
      background: var(--bgSecondColor);
    }
  `
})
export class DefaultPageComponent {

}
