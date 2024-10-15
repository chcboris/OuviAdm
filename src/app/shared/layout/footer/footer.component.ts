import { Component } from '@angular/core';
import { Constantes } from '../../util/constantes';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  version: string = Constantes.versaoAtual;
  ambiente: string = Constantes.ambiente;
}
