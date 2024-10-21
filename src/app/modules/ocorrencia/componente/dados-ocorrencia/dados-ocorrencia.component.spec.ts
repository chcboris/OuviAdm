import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosOcorrenciaComponent } from './dados-ocorrencia.component';

describe('DadosOcorrenciaComponent', () => {
  let component: DadosOcorrenciaComponent;
  let fixture: ComponentFixture<DadosOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
