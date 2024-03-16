import { Component } from '@angular/core';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
 
  constructor(private catService:CategoryService) {
    
   
  }
  tab:Category[]=[];
  getAll() {
    this.catService.getAll().subscribe(
      (categories:Category[])=>{
        this.tab=categories
        console.log (this.tab);
      }   
    )
  }

  


}
