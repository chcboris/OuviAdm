import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Usuario } from '../../models/tre/usuario';
import { PerfilAcesso } from '../../models/tre/perfilAcesso';
import { Criptografia } from '../../util/criptografia';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  usuario?: Usuario;
  perfilAtual?: PerfilAcesso;
  
  ngAfterContentInit() {
    // let user = sessionStorage.getItem('usuario')
    // if (user) {
    //     this.usuario = JSON.parse(Criptografia.decode(user));
    //     this.perfilAtual = this.usuario?.perfilSimulado ? this.usuario?.perfilSimulado : this.usuario?.perfis[0];
    // }
  }

  descricaoUsuarioLogado(){
    // if (this.usuario && this.usuario.servidor && this.usuario.servidor.nome) {
    //   let nome:string = (this.usuario.servidor.nome.length <= 25 ? this.usuario.servidor.nome : this.usuario.servidor.login) ?? "";

    //   return `${nome}  -  ${this.usuario.servidor.lotacao?.sigla} <span class="corMarrom italico">( ${this.usuario.perfilSimulado? this.usuario.perfilSimulado.perfil : this.usuario?.perfis[0]?.perfil} )</span>`;
    // } else {
    //   return '';
    // }
    return 'teste u';
  }

  isLogado(){
    // return sessionStorage.getItem('usuario') ? true : false;    
  }

  logOut(){
    // sessionStorage.removeItem('usuario');
    // this.router.navigate(['']);
  }

}
