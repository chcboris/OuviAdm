import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/models/tre/usuario';
import { Constantes } from '../../../shared/util/constantes';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Criptografia } from '../../../shared/util/criptografia';
import { DialogLoadModuleComponent } from '../../../shared/util/dialog-module/dialog-load-module/dialog-load-module.component';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { Subscription } from 'rxjs';
import { DialogLoadModuleModule } from '../../../shared/util/dialog-module/dialog-load-module/dialog-load-module.module';
import { Analise } from '../../../shared/models/tre/analise';

@Component({
  selector: 'app-pg-login',
  standalone: true,
  imports: [SharedModule, DialogLoadModuleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pg-login.component.html',
  styleUrl: './pg-login.component.css'
})
export class PgLoginComponent implements OnInit, OnDestroy{
  
  loginValido: boolean = true;
  formUsuario!: FormGroup;
  usuario?: Usuario;
  //analise?: Analise;
  analise: Analise = new Analise();
  mensagemResposta?: string;
  mensagemSucesso?: string;
  subscriptions: Subscription[] = [];
  dialogRef?: any;
  versaoAtual = Constantes.versaoAtual;
  

  constructor(private fb: FormBuilder, private router:Router,private dialog: MatDialog) {} 

  ngOnInit(): void {
    this.createFormLogin(new Usuario());  }

  // ngAfterContentInit() {
  //   this.createFormLogin(new Usuario());
  // }

  createFormLogin(usuario: Usuario) {
    this.formUsuario = this.fb.group({
      login: [usuario.login, Validators.required],
      senha: [usuario.senha, Validators.required]
    })
  }

   autenticar() {
     this.openDialog();
     this.usuario = (!this.usuario) ? new Usuario() : this.usuario;
     let login:string = this.formUsuario.value.login;
     this.usuario.login = login.toUpperCase();
     this.usuario.senha = this.formUsuario.value.senha;

  //   let subAutenticar:Subscription = this.usuarioService.autenticar(this.usuario).subscribe({
  //     next: (res) => {
  //       this.usuario = res;
     
         //this.analise.login = login.toUpperCase();
         sessionStorage.setItem("usuario", Criptografia.encode(JSON.stringify(this.usuario)));
         //sessionStorage.setItem("analise", Criptografia.encode(JSON.stringify(this.analise)));
         this.closeDialog();
         this.router.navigate(['']);
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
    
   }

  limparMensagens() {
    this.mensagemResposta = '';
    this.mensagemSucesso = '';
  }

  openDialog() {
    this.dialogRef = this.dialog.open(DialogLoadModuleComponent, { panelClass: 'dialog-load' });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
