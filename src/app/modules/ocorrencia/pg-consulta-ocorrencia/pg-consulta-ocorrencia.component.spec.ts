import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConsultaOcorrenciaComponent } from './pg-consulta-ocorrencia.component';

describe('PgConsultaOcorrenciaComponent', () => {
  let component: PgConsultaOcorrenciaComponent;
  let fixture: ComponentFixture<PgConsultaOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgConsultaOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgConsultaOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
