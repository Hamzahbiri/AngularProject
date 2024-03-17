import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';

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
 


  constructor(private categoryService:CategoryService) {
       
  }


  getAll() {
    this.categoryService.getAll().subscribe(
      (categories:Category[])=>{
        this.tab=categories
      }   
    )
  }
}
