import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';
import { Article } from 'src/models/Article'; // Import the Article model
import { ArticleService } from 'src/services/article.service'; // Import the ArticleService

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private categoryService: CategoryService
  ) {
    this.articleForm = this.fb.group({
      articleName: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

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
  submitForm() {
    if (this.articleForm.valid) {
      console.log('Form submitted:', this.articleForm.value);
  
      // Create a new Article object with form values
      const newArticle: Article = {
        nomarticle: this.articleForm.value.articleName, // Assign the article name
        description: this.articleForm.value.description,
        prix: this.articleForm.value.prix,
        imageart: this.articleForm.value.image,
        category: this.articleForm.value.category
      };
  
      // Call ArticleService to add the article
      this.articleService.addArticle(newArticle).subscribe(
        () => {
          console.log('Article added successfully!');
          // Optionally, reset the form after successful submission
          this.articleForm.reset();
        },
        error => {
          console.error('Error adding article:', error);
        }
      );
    } else {
      console.error('Form is invalid.');
    }
  }
  
  
}
