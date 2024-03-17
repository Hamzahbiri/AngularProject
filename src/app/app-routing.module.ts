import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path: "login",
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: "articles",
    pathMatch: 'full',
    component: ArticleListComponent
  },

  {
    path: "categories",
    pathMatch: 'full',
    component: CategoryListComponent
  },

  {
    path:"**",
    redirectTo:"articles"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
