import { Departament } from './department.model';

export interface Product {
  id: number
  name: string
  price: number
  description: string
  department: Departament
}
