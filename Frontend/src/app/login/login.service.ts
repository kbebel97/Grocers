import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/model.admin';
import { User } from '../models/model.user';
import { Employee } from '../models/model.employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  retrieveAllAdminDetails(): Observable<Admin[]> {
    return this.http.get<Admin[]>("http://localhost:9090/admin/allAdminDetails");
  }

  retrieveAllUserDetails(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9090/user/allUserDetails");
  }

  retrieveAllEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:9090/employee/allEmployeeDetails");
  }

  login(userName, password): Observable<User>{
    return this.http.post<User>('http://localhost:9090/user/login', {userName, password});
  }

  saveUserToLocal(authUser: User){
    localStorage.setItem('auth_user', JSON.stringify(authUser));
    return authUser;
  }

  getUserFromLocal(): User{
    let authUser: User = JSON.parse(localStorage.getItem('auth_user'));
    return authUser;
  }
}
