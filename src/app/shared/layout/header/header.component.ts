import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Usuario } from '../../models/tre/usuario';
import { PerfilAcesso } from '../../models/tre/perfilAcesso';
import { Criptografia } from '../../util/criptografia';
import { Router } from '@angular/router';
import { Analise } from '../../models/tre/analise';

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
  analise?: Analise;
  
  isOco?:boolean;

  constructor(private router:Router) { }

  ngAfterContentInit() {
    // let user = sessionStorage.getItem('usuario')
    // if (user) {
    //     this.usuario = JSON.parse(Criptografia.decode(user));
    //     this.perfilAtual = this.usuario?.perfilSimulado ? this.usuario?.perfilSimulado : this.usuario?.perfis[0];
    // }

    let st: boolean;
    this.isOco = false;
    let sessao = sessionStorage.getItem('analise')
    if (sessao) {
         let analise = JSON.parse(Criptografia.decode(sessao));
         this.router.navigate(['']);
        if(analise.idOcorencia){
          this.isOco =  true;          
        }
    }       
  }

  // isOcorrencia() {
  //   let st: boolean;
    
  //   let sessao = sessionStorage.getItem('analise')
  //   if (sessao) {
  //        let analise = JSON.parse(Criptografia.decode(sessao));
  //        this.router.navigate(['']);
  //       if(analise.idOcorencia){
  //         return true;          
  //       }
  //   }   
  //  return false;
  // }

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
    sessionStorage.removeItem('analise');
    this.router.navigate(['']);
  }

  menuNavegacao(pagina: string){
    this.router.navigate([pagina]);
  }

  retornarTelaPrincipal(){
    let sessao = sessionStorage.getItem('analise')
    if (sessao) {
         let analise = JSON.parse(Criptografia.decode(sessao));
         analise.idOcorencia = '';
         sessionStorage.setItem("analise", Criptografia.encode(JSON.stringify(this.analise)));
         this.isOco =  false;          
         this.router.navigate(['']);
        }
    }   

}
