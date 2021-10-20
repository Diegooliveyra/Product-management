import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  public depName!: string

  constructor() { }

  ngOnInit(): void {
  }

  save(){

  }

  clear(){

  }

}
