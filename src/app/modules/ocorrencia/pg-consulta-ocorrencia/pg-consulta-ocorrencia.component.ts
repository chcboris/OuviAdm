import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Criptografia } from '../../../shared/util/criptografia';
import { Analise } from '../../../shared/models/tre/analise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-consulta-ocorrencia',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pg-consulta-ocorrencia.component.html',
  styleUrl: './pg-consulta-ocorrencia.component.css'
})
export class PgConsultaOcorrenciaComponent {

  analise: Analise = new Analise();

  constructor(private router:Router) { }

  tratar() {
    // this.openDialog();
    //this.usuario = (!this.usuario) ? new Usuario() : this.usuario;
    // let login:string = this.formUsuario.value.login;
    // this.usuario.login = login.toUpperCase();
    // this.usuario.senha = this.formUsuario.value.senha;

 //   let subAutenticar:Subscription = this.usuarioService.autenticar(this.usuario).subscribe({
 //     next: (res) => {
 //       this.usuario = res;
    // 
        // this.analise.login = login.toUpperCase();
        //sessionStorage.setItem("usuario", Criptografia.encode(JSON.stringify(this.usuario)));
        // sessionStorage.setItem("analise", Criptografia.encode(JSON.stringify(this.analise)));
        // this.closeDialog();
        // this.router.navigate(['']);
 //     },
 //     error: (e) => {
 //       this.mensagemResposta = e.error;
 //       setTimeout(() => {
 //         this.limparMensagens();
 //       }, 8000);
 //       this.router.navigate(['']);
 //       this.closeDialog();
 //     }
 //   });
 //   this.subscriptions.push(subAutenticar);
   
 let sessao = sessionStorage.getItem('analise')
 if (sessao) {
     this.analise = JSON.parse(Criptografia.decode(sessao));
 }

  this.analise.idOcorencia = 100;

  sessionStorage.setItem("analise", Criptografia.encode(JSON.stringify(this.analise)));
 
  this.router.navigate(['Ocorrencia']);
}

 

}
