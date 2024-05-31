import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasUsuarioComponent } from './ventajas-usuario.component';

describe('VentajasUsuarioComponent', () => {
  let component: VentajasUsuarioComponent;
  let fixture: ComponentFixture<VentajasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentajasUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentajasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
