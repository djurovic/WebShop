import { Shipping_info } from './shipping_info';
import { User } from './user';

export class Users_orders {
  id: number;
  date_created: string;
  status: string;
  shipping_info_id: Shipping_info;
  user_id: User;
}
