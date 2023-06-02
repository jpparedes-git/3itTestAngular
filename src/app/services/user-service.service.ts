import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Music } from '../models/music';
import { Vote } from '../models/vote';

@Injectable()
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/usuarios'
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public saveUser(user : User, id : String): Observable<any>{
    console.log("save user and music id="+id);
    return this.http.post<User>(this.usersUrl+"/"+id, user);
  }
}
