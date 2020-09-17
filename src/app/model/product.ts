import { Category } from './category';
import { Order_details } from './order_detail';

export class Product{
  id: number;
  descritpion: string;
  name: string;
  price: number;
  shipping_price: number;
  category_id:Category;
  order_detail_id: Order_details;
}
