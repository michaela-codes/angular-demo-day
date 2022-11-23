import { Injectable } from '@angular/core';
import { Child } from './child';
import { CHILDREN } from './mock-children';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  getChildren(): Observable<Child[]> {
    const children = of(CHILDREN);
    return children
  }

  getChild(name: string): Observable<Child> {
    const child = CHILDREN.find(c => c.name === name)!;
    return of(child)
    
  }

  constructor() { }
}
