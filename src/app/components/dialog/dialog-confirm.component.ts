import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'dialog-confirm.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ConfirmDialogComponent{
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
