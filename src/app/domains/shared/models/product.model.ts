import { Category } from "./category.model";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  detalle: string;
  images: string[];
  creationAt: string;
  category: Category
}