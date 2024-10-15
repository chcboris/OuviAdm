import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { Constantes } from './shared/util/constantes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouvi';
  enderecoFundo:string = '';

  backgroundImage(){
    this.enderecoFundo = Constantes.imagePath + 'fundoLogin2.png';
    return {'background-image': 'url(' + this.enderecoFundo + ')'}
  }
}
