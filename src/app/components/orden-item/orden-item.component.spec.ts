import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenItemComponent } from './orden-item.component';

describe('OrdenItemComponent', () => {
  let component: OrdenItemComponent;
  let fixture: ComponentFixture<OrdenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
