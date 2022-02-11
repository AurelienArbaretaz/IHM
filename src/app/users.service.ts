import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject,of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  configUrl = 'assets/users.json';
  users=new BehaviorSubject<User[]>([{id:0,name:''}])
 
  constructor(private http: HttpClient) { }

  loadUsers(){
    return this.http.get<User[]>(this.configUrl);
  }
}
