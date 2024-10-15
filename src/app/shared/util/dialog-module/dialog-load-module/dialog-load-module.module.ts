import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogLoadModuleComponent } from './dialog-load-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DialogLoadModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class DialogLoadModuleModule { }

