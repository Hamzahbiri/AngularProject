import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}
 

  save(article:Article): Observable<void>
  {
     return  this.httpClient.post<void>('http://localhost:8000/api/articles', article);
 
  }
  // TODO : create api on backend side for recovering getArticlesByCaztegory, this doesn't work
  getArticlesByCategory(categoryId: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>('http://localhost:8000/api/articles/' + categoryId);
  }

  
 update(article: Article): Observable<void> {
  console.log("Updating article : ");
  console.log(article);
  return this.httpClient.put<void>('http://localhost:8000/api/articles/' + article.id, article);
}

  deleteById(id:string):Observable<void>
  {
    return this.httpClient.delete<void>('http://localhost:8000/api/articles/' + id);
  }
  getAll():Observable<Article[]>
  {
       return  this.httpClient.get<Article[]>('http://localhost:8000/api/articles');
      
  }
}
