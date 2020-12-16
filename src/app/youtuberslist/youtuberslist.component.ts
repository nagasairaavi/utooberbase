import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { CommonService } from '../common.service';
import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-youtuberslist',
  templateUrl: './youtuberslist.component.html',
  styleUrls: ['./youtuberslist.component.css']
})
export class YoutuberslistComponent implements OnInit {
public message:any
  constructor(public cs:CommonService) { }
  youtubersList:any;
  file:File;
  sno=[];
  Alength;
  commonTerm;
  index=[];
  ngOnInit(): void {
    console.log("a");
    this.cs.youtubersList().subscribe((dataYoutube)=>{
      console.log("a1");
      
      this.youtubersList=dataYoutube["message"];
      
      this.Alength=this.youtubersList.length;
      console.log(this.Alength);
      for(let i=1;i===this.Alength;i++){
        console.log("checking for loop");
        
        this.index.push(i);
        }
      console.log(this.index);
      
      
      
    })
    
  }





  onScroll(){
    console.log("scrolled");
    
  }







  
  
 
  
  public downloadFile(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.youtubersList);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
    ['data'] };
    const excelBuffer:any=XLSX.write(workbook,{   bookType:"xlsx", type:
    "file"})
    this.saveAsExcelFile(excelBuffer, 'excelFileName');
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
    EXCEL_EXTENSION);
    }
 
}
  



