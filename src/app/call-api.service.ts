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
  putUser(user){
    return this.http.post('http://jsonplaceholder.typicode.com/users/',user).map(res=>res.json());
  }
  removeUser(id){
    return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id).map(res=>res.json());
  }
}
