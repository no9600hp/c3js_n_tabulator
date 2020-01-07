import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as XLSX from 'xlsx';
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


  arrayBuffer:any;
file:File;
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let headers = []
      let fileReader = new FileReader();
      
        fileReader.onload = (e) => {
          
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            let data1 = (XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            console.log(Object.keys(data1[0]))
        }
        fileReader.readAsArrayBuffer(this.file);
}

  ngOnInit() {
    
  }



}
