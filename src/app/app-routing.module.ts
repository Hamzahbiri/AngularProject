import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'category-form', component: CategoryFormComponent },
      { path: 'article-form', component: ArticleFormComponent },
      { path: 'login', component: LoginComponent },
      { path: 'articles', component: ArticleListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'orders', component: OrderComponent },     
    ]
  },

   {
    path: "orders",
    pathMatch: 'full',
    component: OrderComponent
  },
  {
    path: "menu",
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: "about",
    pathMatch: 'full',
    component: AboutUsComponent
  },
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
    redirectTo:"menu"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
