import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UsuarioService } from './services/usuario.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule
  ]
})
export class SharedModule { }
