import { Routes } from '@angular/router';
import { PgCadastroOcorrenciaComponent } from './modules/ocorrencia/pg-cadastro-ocorrencia/pg-cadastro-ocorrencia.component';
import { PgConsultaOcorrenciaComponent } from './modules/ocorrencia/pg-consulta-ocorrencia/pg-consulta-ocorrencia.component';
import { PgConsultaAssuntoComponent } from './modules/assunto/pg-consulta-assunto/pg-consulta-assunto.component';
import { PgCadastroAssuntoComponent } from './modules/assunto/pg-cadastro-assunto/pg-cadastro-assunto.component';
import { PrincipalComponent } from './shared/layout/principal/principal.component';
import { PgLoginComponent } from './modules/login/pg-login/pg-login.component';

export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: PgLoginComponent
  },
    {
        path: '',
        component: PrincipalComponent,
      },
      {
        path: 'CadastroOcorrencia',
        component: PgCadastroOcorrenciaComponent,
      },
      {
        path: 'ConsultaOcorrencia',
        component: PgConsultaOcorrenciaComponent,
      },
      {
        path: 'CadastroAssunto',
        component: PgCadastroAssuntoComponent,
      },
      {
        path: 'ConsultaAssunto',
        component: PgConsultaAssuntoComponent,
      }
];
