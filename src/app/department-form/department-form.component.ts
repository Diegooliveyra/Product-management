import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  public depName!: string

  constructor(private service: DepartmentService) { }

  ngOnInit(): void {
  }

  save(){
    this.service.addDepartments({
      name: this.depName
    })
    this.clear()
  }

  clear(){
    this.depName = ''
  }

}
