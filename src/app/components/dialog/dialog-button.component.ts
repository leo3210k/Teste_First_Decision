import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from './dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-button',
  templateUrl: 'dialog-button.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogButtonComponent {
  @Output() dataAdded = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataAdded.emit(result);
      }
    });
  }
}