import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCadastroAssuntoComponent } from './pg-cadastro-assunto.component';

describe('PgCadastroAssuntoComponent', () => {
  let component: PgCadastroAssuntoComponent;
  let fixture: ComponentFixture<PgCadastroAssuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgCadastroAssuntoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgCadastroAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
