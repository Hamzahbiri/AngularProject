import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../../models/Category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent {
  categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      nomcategorie: [data.nomcategorie, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeData(): void {
    if (this.categoryForm.valid) {
      const updatedCategory: Category = {
        id: this.data.id,
        nomcategorie: this.categoryForm.value.nomcategorie
      };

      this.categoryService.update(updatedCategory).subscribe(
        () => {
          this.data.nomcategorie = updatedCategory.nomcategorie;
          console.log('Category updated successfully:', this.data);
          this.dialogRef.close(this.data);
        },
        
      );
    }
  }
}
