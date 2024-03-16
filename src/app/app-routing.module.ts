import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  
  {
    path: "articles",
    pathMatch: 'full',
    component: ArticleListComponent
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
