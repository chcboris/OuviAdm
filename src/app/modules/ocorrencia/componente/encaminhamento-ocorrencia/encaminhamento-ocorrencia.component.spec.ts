import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaminhamentoOcorrenciaComponent } from './encaminhamento-ocorrencia.component';

describe('EncaminhamentoOcorrenciaComponent', () => {
  let component: EncaminhamentoOcorrenciaComponent;
  let fixture: ComponentFixture<EncaminhamentoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncaminhamentoOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncaminhamentoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
