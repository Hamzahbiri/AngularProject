import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';
import { ConfirmationDialogCategoryComponent } from '../confirmation-dialog-category/confirmation-dialog-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'nameCat',
    'actions',
   ];
   tab:Category[]=[];
 
   ngOnInit(): void {
     this.getAll();
   }
 


  constructor(private categoryService:CategoryService, public dialog: MatDialog, private ref: ChangeDetectorRef) {
       
  } 
  deleteCategory(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogCategoryComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this category?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        this.categoryService.deleteById(id).subscribe(
          () => {
            console.log('Category deleted successfully:', id);
            // Remove the deleted category from the tab array
            this.tab = this.tab.filter(category => category.id !== id);
            // Trigger Angular's change detection mechanism
            this.detectChanges();
          },
          error => {
            console.error('Error deleting category:', error);
            // Handle error if deletion fails
          }
        );
      }
    });
  }
  
  // Helper method to trigger change detection
  private detectChanges(): void {
    try {
      // This forces Angular to detect changes and update the UI
      this.ref.detectChanges();
    } catch (e) {
      // Handle any error that may occur during change detection
      console.error('Error during change detection:', e);
    }
  }
  
  


  getAll() {
    this.categoryService.getAll().subscribe(
      (categories:Category[])=>{
        this.tab=categories
      }   
    )
  }
}
