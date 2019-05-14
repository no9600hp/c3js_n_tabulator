import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() data1
  @Input() data2
  @Input() data3
  

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
              this.data2,
              this.data3
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
