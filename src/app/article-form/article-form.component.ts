import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/services/article.service';
import { Router } from '@angular/router';

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
    private categoryService: CategoryService,
    private router: Router 
  ) {
    this.articleForm = this.fb.group({
      articleName: ['', Validators.required],
      categoryId: ['', Validators.required], 
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
      const newArticle: Article = {
        id: '', 
        nomarticle: this.articleForm.value.articleName,
        description: this.articleForm.value.description,
        prix: this.articleForm.value.prix,
        imageart: this.articleForm.value.image,
        categorieID: this.articleForm.value.categoryId,
        categories: { id: this.articleForm.value.categoryId, nomcategorie: '' } 
      };

      this.articleService.save(newArticle).subscribe(
        () => {
          console.log('Article added successfully!');
          this.articleForm.reset();
          this.router.navigateByUrl('/articles');
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
