import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../../models/Category'; // Adjust the path as per your project structure
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category ,  private categoryService: CategoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  changeData(): void {
    if (this.data) {
      const updatedCategory: Category = {
        id: this.data.id,
        nomcategorie: this.data.nomcategorie // Update only the name
      };
  
      this.categoryService.update(updatedCategory).subscribe(
        () => {
          this.data.nomcategorie = updatedCategory.nomcategorie; // Update the local data with the new name
          console.log('Category updated successfully:', this.data);
          this.dialogRef.close(this.data); // Pass updated data back to the component that opened the dialog
        },
        error => {
          console.error('Error updating category:', error);
        }
      );
    }
  
  }
}
