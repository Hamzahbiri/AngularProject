
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/services/article.service';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'categoryName',
    'description',
    'prix',
    'image',
    'actions'
  ];
  tab: Article[] = [];

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog
  ) {
    this.getAll();
  }


  ngOnInit(): void {
    this.getAll();
  }

  deleteArticle(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this article?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        this.articleService.deleteById(id).subscribe(
          () => {
            this.tab = this.tab.filter(article => article.id !== id);
          },
         
        );
      }
    });
  }
  
  editArticle(article: Article): void {
    const dialogRef = this.dialog.open(ArticleEditComponent, {
      width: '500px',
      data:  article
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getAll() {
    this.articleService.getAll().subscribe(
      (articles: Article[]) => {
        this.tab = articles;
      },
    );
  }
}
