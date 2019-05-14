import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  data1= ['data1', 30, 200, 100, 400, 150, 250, 30]
  data2 = ['data2', 130, 100, 140, 200, 150, 50, 400]
  data3 = ['data3', 180, 10, 100, 100, 120, 30, 300]
  constructor() { }

  ngOnInit() {
    
  }



}
