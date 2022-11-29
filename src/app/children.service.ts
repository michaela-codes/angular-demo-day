import { Injectable, OnInit } from '@angular/core';
import { Child } from './child';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ChildrenService {
  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.childrenUrl);
  }

  getChild(id: string): Observable<Child> {
    return this.http.get<Child>(`${this.childrenUrl}/${id}`);
  }

  addChild(newChild: Child): Observable<any> {
    return this.http.post(`${this.childrenUrl}`, newChild, this.httpOptions)
  }


  deleteChild(id: string): Observable<unknown> {
    return this.http.delete(`${this.childrenUrl}/${id}`, this.httpOptions)
  }
  //updateChild(child: Child): Observable<any> {
   // return this.http.put(`${this.childrenUrl}/${child.id}`, child);
  //}

  constructor(private http: HttpClient) {}

  private childrenUrl = '/api/v1/children';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
