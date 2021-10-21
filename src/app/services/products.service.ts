import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: any[] = [
    { id: 1, name: 'Laptop', department_id: 4, description: 'Laptop Lenovo' },
    { id: 2, name: 'Shirt', department_id: 1, description: 'Shirt blue' },
    { id: 3, name: 'Polo', department_id: 1, description: 'Polo small size' },
    { id: 4, name: 'Mouse', department_id: 3, description: 'Mouse Gamer' },
  ];

  private products: Product[] = [];
  private nextId!: number;

  constructor(private departmentService: DepartmentService) {
    for (let p of this.data) {
      this.products.push({
        name: p.name,
        description: p.description,
        price: p.price,
        id: p.id,
        department: this.departmentService.getDepartmentById(p.id),
      });
      this.nextId = p.id + 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    this.products.push({ id: this.nextId++, ...p });
    console.log(this.products);
  }
}
