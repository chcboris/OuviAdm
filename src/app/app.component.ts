import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { Constantes } from './shared/util/constantes';
import { PgLoginComponent } from './modules/login/pg-login/pg-login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, PgLoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouvi';
  enderecoFundo:string = '';

  isLogado() {
    let st: boolean;
    //st = sessionStorage.getItem('usuario') ? true : false;
    st = sessionStorage.getItem('analise') ? true : false;
    return st;
    //return sessionStorage.getItem('usuario') ? true : false;
  }



  backgroundImage(){
    this.enderecoFundo = Constantes.imagePath + 'magie.jpg';
    return {'background-image': 'url(' + this.enderecoFundo + ')'}
  }
}
