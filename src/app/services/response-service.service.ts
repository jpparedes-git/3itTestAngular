
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';
import { Vote } from '../models/vote';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/responses'
   }

   public findAll(): Observable<Response[]> {
    return this.http.get<Response[]>(this.usersUrl);
  }

   public saveResponse(userId : String, musicId : String): Observable<any>{
    return this.http.post<Vote>(this.usersUrl,"");
  }

  public findByMusic(music : Music): Observable<Response[]> {
    return this.http.get<Response[]>('http://localhost:8080/api/responsesByMusic/'+music.id);
  }
}
