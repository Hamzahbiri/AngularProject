import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/models/Article';
import { Order } from 'src/models/Order';
import { OrderItem } from 'src/models/OrderItem';
import { OrderProxy } from 'src/models/OrderProxy';
import { ArticleService } from 'src/services/article.service';
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
  'price',
  'actions'
];
orderTable: OrderProxy[] =  [];

constructor(
  private orderItemService: OrderItemService,
  private orderService: OrderService,
  private articleService : ArticleService,
  private router : Router
) {
}


ngOnInit(): void {
  this.getAll();
}
navigateToMenu(): void {
  this.router.navigateByUrl('/menu');
}

getAll() {
  // load orders
  this.orderService.getAll().subscribe(
    (orders: Order[]) => {
     // console.log(orders)

      // load items : 
      this.orderItemService.getAll().subscribe(
        (orderItems : OrderItem[]) =>{
          //console.log(orderItems);

          // load articles : 
          this.articleService.getAll().subscribe(
            (articles : Article[]) =>{
              //console.log(articles)
              

          // join

              orders.forEach(order => {
                var relatedItems = orderItems.filter(item => item.order_id == order.id); 
                var relatedArticles = relatedItems.map(item=>{
                  var art = articles.find( a => a.id == item.article_id)
                  //console.log(art);
                  return art?.nomarticle
                });

                var prixTotal =  relatedItems.map(item=>{
                  var art = articles.find( a => a.id == item.article_id)
                  console.log(art); 
                  return Number.parseFloat(art!.prix)
                }).reduce((sum, current)=>sum + current,0);

                //console.log(relatedArticles);
                const op : OrderProxy = {
                  order_id:order.id,
                  client_id:order.user_id,
                  articles: relatedArticles.join(" ; "),
                  price: prixTotal,
                };
                this.orderTable.push(op)
              });


              //console.log(this.orderTable);
            }
          )


        
    
        }
      );
    

    },
  );



}

}
