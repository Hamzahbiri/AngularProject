import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/models/Order';
import { OrderItem } from 'src/models/OrderItem';
import { OrderProxy } from 'src/models/OrderProxy';
import { OrderItemService } from 'src/services/order-item.service';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders: Order[] = [];
orderItems : OrderItem[] = [];
displayedColumns: string[] = [
  'order_id',
  'client_id',
  'articles',
  'actions'
];
orderProxy: OrderProxy[] =  [];

constructor(
  private orderItemService: OrderItemService,
  public orderService: OrderService,
  private router : Router
) {
}


ngOnInit(): void {
  this.getAll();
}

getAll() {
  // load orders
  this.orderService.getAll().subscribe(
    (orders: Order[]) => {
      this.orders = orders;
      console.log(this.orders)

      // load items : 
      this.orderItemService.getAll().subscribe(
        (orderItems : OrderItem[]) =>{
          this.orderItems = orderItems;
          console.log(this.orderItems);

          // join
          orders.forEach(order => {
            var relatedItems = orderItems.filter(item => item.order_id == order.id);
            const op : OrderProxy = {
              order_id:order.id,
              client_id:order.user_id,
              articles: relatedItems.map(item=>item.article_id).join("; "),
            };
            this.orderProxy.push(op)
          });


          console.log(this.orderProxy);
    
        }
      );
    

    },
  );



}

}
