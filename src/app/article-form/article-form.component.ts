import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
