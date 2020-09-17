import { Product } from './product';
import { Shopping_cart } from './shopping_cart';

export class CartItem {
  id: number;
  quantity: number;
  subtotal: number;
  product_id: Product;
  shopping_cart_id: Shopping_cart;
}
