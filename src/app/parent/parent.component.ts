import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data1= ['data1', 30, 200, 100, 400, 150, 250, 30]
  data2 = ['data2', 130, 100, 140, 200, 150, 50, 400]
  data3 = ['data3', 180, 10, 100, 100, 120, 30, 300]
  

  constructor(
   
    public dialog: MatDialog, 
    
  ) { }

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

  openDialog(): void {
   const dialogRef = this.dialog.open(ModalComponent,{
     width: '850px',
   })
  
  }

}
