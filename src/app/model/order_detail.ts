import { Users_orders } from './users_order';

export class Order_details {
  id: number;
  quantity: number;
  subtotal: number;
  unit_cost: number;
  users_order_id: Users_orders;
}
