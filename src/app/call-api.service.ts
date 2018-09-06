import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { map } from "rxjs/add/operator";

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http:Http) { }
  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/').map(res=>res.json());
  }
}
