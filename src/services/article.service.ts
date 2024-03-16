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
    // return  this.httpClient.post<void>('localhost:8080/api', member);
    return new Observable(observer => observer.next())
  }

  getById(id:string): Observable<Article>
  {
    // return  this.httpClient.post<void>('localhost:8080/api', member);
    return new Observable(observer => observer.next())
  }
 
  deleteById(id:string):Observable<void>
  {
        // return  this.httpClient.post<void>('localhost:8080/api', member);
        return new Observable(observer => observer.next())
  }
  getAll(id:string):Observable<Article>
  {
        // return  this.httpClient.post<void>('localhost:8080/api', member);
        return new Observable(observer => observer.next())
  }

}
