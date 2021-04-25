import { Product } from "./Product.model";

export interface OrderItem{
  _id : string,
  product : Product,
  Quantity: number
}
