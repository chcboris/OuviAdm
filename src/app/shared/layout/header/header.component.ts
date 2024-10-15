import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  descricaoUsuarioLogado(){
    // if (this.usuario && this.usuario.servidor && this.usuario.servidor.nome) {
    //   let nome:string = (this.usuario.servidor.nome.length <= 25 ? this.usuario.servidor.nome : this.usuario.servidor.login) ?? "";

    //   return `${nome}  -  ${this.usuario.servidor.lotacao?.sigla} <span class="corMarrom italico">( ${this.usuario.perfilSimulado? this.usuario.perfilSimulado.perfil : this.usuario?.perfis[0]?.perfil} )</span>`;
    // } else {
    //   return '';
    // }
    return 'teste u';
  }

}
