import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConsultaAssuntoComponent } from './pg-consulta-assunto.component';

describe('PgConsultaAssuntoComponent', () => {
  let component: PgConsultaAssuntoComponent;
  let fixture: ComponentFixture<PgConsultaAssuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgConsultaAssuntoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgConsultaAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
