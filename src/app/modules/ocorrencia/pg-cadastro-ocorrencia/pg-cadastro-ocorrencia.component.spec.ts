import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCadastroOcorrenciaComponent } from './pg-cadastro-ocorrencia.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 

describe('PgCadastroOcorrenciaComponent', () => {
  let component: PgCadastroOcorrenciaComponent;
  let fixture: ComponentFixture<PgCadastroOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgCadastroOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgCadastroOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
