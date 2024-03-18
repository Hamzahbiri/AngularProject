import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  
  {
    path: "category-form",
    pathMatch: 'full',
    component: CategoryFormComponent
  },
  {
    path: "article-form",
    pathMatch: 'full',
    component: ArticleFormComponent
  },
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
