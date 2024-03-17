import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-category',
  templateUrl: './confirmation-dialog-category.component.html',
  styleUrls: ['./confirmation-dialog-category.component.css']
})
export class ConfirmationDialogCategoryComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
