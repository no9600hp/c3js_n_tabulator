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
  constructor() { }

  ngOnInit() {
    this.createChart();
  }


  createChart(){
    var chart = c3.generate({
      bindto: '#barChart',
      data: {
          columns: [
              this.data1,
              this.data2
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
  });
  }
}
