import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaOcorrenciaComponent } from './resposta-ocorrencia.component';

describe('RespostaOcorrenciaComponent', () => {
  let component: RespostaOcorrenciaComponent;
  let fixture: ComponentFixture<RespostaOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespostaOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespostaOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
