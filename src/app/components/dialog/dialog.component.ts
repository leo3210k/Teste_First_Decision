import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './dialog-confirm.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  userForm!: FormGroup;
  toppings = new FormControl('');
  flagSelected: any;
  selectedCountry: any = { code: '+1', name: 'USA', flag: 'assets/icons/flags/united-states.svg' }

  countries = [
    { code: '+1', name: 'USA', flag: 'assets/icons/flags/united-states.svg' },
    { code: '+55', name: 'Brazil', flag: 'assets/icons/flags/brazil.svg' },
    { code: '+44', name: 'UK', flag: 'assets/icons/flags/united-kingdom.svg' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: [''],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[^@]+@[^@]+\.com$/)
      ]],
      profile: ['', Validators.required],
      language: ['', Validators.required],
      fav_contact: ['']
    })
  }

  submitForm() {
    if(this.userForm.valid) {
      this.closeDialog()
      this.openSnackBar('Convite enviado com sucesso!', 'Fechar');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  get f() {
    return this.userForm.controls;
  }

  closeDialog(): void {
    this.dialogRef.close(this.userForm.value);
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.closeAll();
      }
    });
  }
}
