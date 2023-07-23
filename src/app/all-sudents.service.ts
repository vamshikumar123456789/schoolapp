import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AllSudentsService {

  constructor(private httpclient:HttpClient) { }

  getinfo():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }

  getfilteredinfo(term:any):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

  getsortedinfo(column:any,order:any):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getpagedinfo(limit:any,page:any):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }

  deleteinfo(id:any):Observable<any>{
    return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
}
