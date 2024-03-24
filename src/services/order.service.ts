import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {}
 

  save(order:Order): Observable<void>
  {
     return  this.httpClient.post<void>('http://localhost:8000/api/orders/', order);
 
  }
  
 update(orderItem: Order): Observable<void> {
  return this.httpClient.put<void>('http://localhost:8000/api/orders/' + orderItem.id, orderItem);
}

  deleteById(id:string):Observable<void>
  {
    return this.httpClient.delete<void>('http://localhost:8000/api/orders/' + id);
  }
  getAll():Observable<Order[]>
  {
       return  this.httpClient.get<Order[]>('http://localhost:8000/api/orders/');
      
  }
}
