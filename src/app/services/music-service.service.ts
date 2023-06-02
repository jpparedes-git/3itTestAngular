import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/musics'
   }

   public findAll(): Observable<Music[]> {
    return this.http.get<Music[]>(this.usersUrl);
  }

  public getMusic(id: String): Observable<Music>{
    return this.http.get<Music>(this.usersUrl+"/"+id);
  }


}
