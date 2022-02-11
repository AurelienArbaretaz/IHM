import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser?:User;
  users : Observable<User[]> | undefined;

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.showUsers();  
  }

  showUsers(){
    this.users=this.usersService.loadUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
}
