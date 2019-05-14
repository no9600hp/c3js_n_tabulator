import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  myTable: Tabulator;
  data1= [
      { id: 1, firstName: "John", lastName: "Smith", state: "Ohio" },
      { id: 2, firstName: "Jane", lastName: "Doe", state: "Iowa" },
      { id: 3, firstName: "Bill", lastName: "Great", state: "Hawaii" },
      { id: 4, firstName: "Ted", lastName: "Adventure", state: "Arizona" }
    ];
  data2 = [
    { title: "Id", field: "id" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Location", field: "state" }
  ];
  data3 = 'table1'
 
  constructor() { }

  ngOnInit() {
   
  }



}
