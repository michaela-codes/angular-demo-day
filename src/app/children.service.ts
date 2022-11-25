import { Injectable } from '@angular/core';
import { Child } from './child';
import { CHILDREN } from './mock-children';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.childrenUrl);

    
  }

  getChild(name: string): Observable<Child> {
    return this.http.get<Child>(`${this.childrenUrl}/${name}`);
    
  }

  //updateChild(name: string): Observable<any> {

  //}

  constructor(private http: HttpClient) { }

  private childrenUrl = '/api/v1/demoday';
}
