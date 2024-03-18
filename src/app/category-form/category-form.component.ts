import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/Category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router 

  ) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.categoryForm.valid) {
      const newCategory: Category = {
        id: '', 
        nomcategorie: this.categoryForm.value.categoryName
      };

      this.categoryService.save(newCategory).subscribe(
        () => {
         
          console.log('Category added successfully!');
          this.categoryForm.reset();
          this.router.navigateByUrl('/categories');
        },
        error => {
      
          console.error('Error adding category:', error);
        }
      );
    }
  }
}
