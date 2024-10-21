import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EncaminhamentoOcorrenciaComponent } from '../componente/encaminhamento-ocorrencia/encaminhamento-ocorrencia.component';
import { RespostaOcorrenciaComponent } from '../componente/resposta-ocorrencia/resposta-ocorrencia.component';
import { PedidoInfoOcorrenciaComponent } from '../componente/pedido-info-ocorrencia/pedido-info-ocorrencia.component';
import { DadosOcorrenciaComponent } from '../componente/dados-ocorrencia/dados-ocorrencia.component';

@Component({
  selector: 'app-pg-ocorrencia',
  standalone: true,
  imports: [SharedModule, DadosOcorrenciaComponent, RespostaOcorrenciaComponent,  PedidoInfoOcorrenciaComponent, EncaminhamentoOcorrenciaComponent],
  templateUrl: './pg-ocorrencia.component.html',
  styleUrl: './pg-ocorrencia.component.css'
})
export class PgOcorrenciaComponent {

}
