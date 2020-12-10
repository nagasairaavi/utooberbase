import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CommonService } from '../common.service';
import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public cs:CommonService) { }
  youtubersList:any;
  file:File;
  sno=[];
  Alength;
  index=[];
  
  ngOnInit(): void {
  
  }

  newYoutuber(obj){
    // console.log(obj);
    // this.youtubersList.push(obj);
    this.cs.newData(obj).subscribe((res)=>{
      if(res['message']!=="success"){
        alert(res['message'])
      }
      else{
        alert("youtuber data uploaded");
        this.ngOnInit();
      }
    })
  
  }

  fileUpload(filedata){
    this.file=filedata.target.files[0];

  }
  sheetData(data){
    let formdata = new FormData();
    formdata.append("excel",this.file,this.file.name);
    this.cs.uploadSheet(formdata).subscribe((res)=>{
    if(res["message"]=="Sheet uploaded successfully")
    {
    alert(res["message"]);
    this.ngOnInit()
    }
    else if(res["err_desc"]=="Corrupted excel file")
    {
    alert(res["err_desc"]);
    }
   })
  }
}