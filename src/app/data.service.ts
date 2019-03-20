import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postUrl= '../assets/data/post.json';
  private statusUrl = '../assets/data/status.json';


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.postUrl).pipe(map(data => data));
  }
  getPost(id: number):Observable<Ipost>{
    return this.getPosts().pipe(
      map((posts: Ipost[]) => posts.find(p =>p.id === id)))
    
  }

  getStatus(): Observable<any>{
    return this.http.get<Ipost[]>(this.statusUrl);
  }

}

export interface Ipost {
  id:number;
  createdDate: Date;
  title: string;
  subtitle: string;
  text: string;
  archiveDate: Date;
  isDeleted: boolean;

}
