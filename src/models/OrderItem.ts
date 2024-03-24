import { Article } from "./Article";
import { Order } from "./Order";

export interface OrderItem{
    id:string
    order_id:string
    orders:Order
    article_id:string
    articles:Article
}