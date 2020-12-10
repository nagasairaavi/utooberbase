import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private hc:HttpClient) { }


  //to send data to db
  newData(obj):Observable<any>{
    console.log(obj);
    return this.hc.post('upload',obj);
  }


  //to read data from db
  youtubersList():Observable<any>{
    console.log("b");
    return this.hc.get('/youtubers');
    
  }




  //upload sheet
  uploadSheet(data):Observable<any>{
    return this.hc.post<any>('/uploadsheet',data)
  }
}
