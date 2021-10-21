import { Department } from './../models/department.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id:1, name:'Clothing'},
    {id:2, name:'Books'},
    {id:3, name:'Electronics'},
    {id:4, name:'Computers'}
  ]
  private idNew: number = 5
  constructor() { }

  getDepartments(): Department[] {
    return this.departments
  }

  addDepartments(d:Department){
    this.departments.push({...d, id:this.idNew++})
    console.log(this.departments)
  }

  getDepartmentById(id:number):any{
    return this.departments.find(d => d.id == id)
  }


}
