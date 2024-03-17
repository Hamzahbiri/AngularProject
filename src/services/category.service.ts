import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  save(category: Category): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8000/api/categories', category);
  }

  getById(id: string): Observable<Category> {
    return this.httpClient.get<Category>('http://localhost:8000/api/categories/' + id);
  }

  update(category: Category): Observable<void> {
    return this.httpClient.put<void>('http://localhost:8000/api/categories/' + category.id, category);
  }

  deleteById(id: string): Observable<void> {
    console.log('Deleting category with ID:', id);
    return this.httpClient.delete<void>('http://localhost:8000/api/categories/' + id);
    
  }
  

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:8000/api/categories');
  }
}
