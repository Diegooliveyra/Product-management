import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public name!: string;
  public department!: any;
  public departments: Department[] = [];
  public price!: number;
  public description!: string;

  constructor(
    private productService: ProductsService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department,
    });
    this.clear();
  }

  clear() {
    this.name = '';
    this.price = 0;
    this.department = null;
    this.description = '';
  }
}
