import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoInfoOcorrenciaComponent } from './pedido-info-ocorrencia.component';

describe('PedidoInfoOcorrenciaComponent', () => {
  let component: PedidoInfoOcorrenciaComponent;
  let fixture: ComponentFixture<PedidoInfoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoInfoOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidoInfoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
