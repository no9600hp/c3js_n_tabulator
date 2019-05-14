import { Component, OnInit, Input } from '@angular/core';
import Tabulator from 'tabulator-tables';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  myTable: Tabulator;
  @Input() data1
  @Input() data2
  @Input() data3
 
  

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.createTable();
  }

  createTable(){
    this.myTable = new Tabulator('#' + this.data3); 
    this.myTable.setColumns(this.data2);
    this.myTable.setData(this.data1);
  }


}
