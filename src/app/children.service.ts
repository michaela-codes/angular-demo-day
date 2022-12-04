import { Injectable, OnInit } from '@angular/core';
import { Child } from './child';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ChildrenService {
  getChildren(): Observable<Child[]> {
    this.messageService.add('Viewed children.')
    return this.http.get<Child[]>(this.childrenUrl);
  }

  getChild(id: string): Observable<Child> {
    this.messageService.add(`Viewed child with ID: ${id}`)
    return this.http.get<Child>(`${this.childrenUrl}/${id}`);
  }

  add(newChild: Child): Observable<any> {
    this.messageService.add('Added new child.')
    return this.http.post(`${this.childrenUrl}`, newChild, this.httpOptions)
  }


  deleteChild(id: string): Observable<unknown> {
    return this.http.delete(`${this.childrenUrl}/${id}`, this.httpOptions)
  }

  updateChild(child: Child): Observable<any> {
    this.messageService.add(`Updated ${child.name}`)
   return this.http.put(`${this.childrenUrl}/${child.id}`, child);
  }

  constructor(private http: HttpClient,
    private messageService: MessageService) {}

  private childrenUrl = '/api/v1/children';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
