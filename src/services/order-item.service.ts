import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private httpClient: HttpClient) {}
 

  save(orderItem:OrderItem): Observable<void>
  {
     return  this.httpClient.post<void>('http://localhost:8000/api/orderItems/', orderItem);
 
  }
  
 update(orderItem: OrderItem): Observable<void> {
  return this.httpClient.put<void>('http://localhost:8000/api/orderItems/' + orderItem.id, orderItem);
}

  deleteById(id:string):Observable<void>
  {
    return this.httpClient.delete<void>('http://localhost:8000/api/orderItems/' + id);
  }
  getAll():Observable<OrderItem[]>
  {
       return  this.httpClient.get<OrderItem[]>('http://localhost:8000/api/orderItems/');
      
  }
}
