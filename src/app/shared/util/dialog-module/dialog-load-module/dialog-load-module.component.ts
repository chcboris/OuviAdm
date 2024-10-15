import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-load-module',
  templateUrl: './dialog-load-module.component.html',
  styleUrls: ['./dialog-load-module.component.css']
})
export class DialogLoadModuleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogLoadModuleComponent>) {
      dialogRef.disableClose = true;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
