import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOcorrenciaComponent } from './pg-ocorrencia.component';

describe('PgOcorrenciaComponent', () => {
  let component: PgOcorrenciaComponent;
  let fixture: ComponentFixture<PgOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
