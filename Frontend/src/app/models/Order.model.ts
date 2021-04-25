import { OrderItem } from "./OrderItem.model";

export interface Order{
  _id : string,
  _userId : string,
  email : string,
  userName : string,
  orderItems : Array<OrderItem>
}
