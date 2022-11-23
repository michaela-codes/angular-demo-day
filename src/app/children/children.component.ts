import { Component, OnInit } from '@angular/core';
import { Child } from '../child'
import { CHILDREN } from '../mock-children';
import { ChildrenService } from '../children.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit{
  children: Child[] = [];

  getChildren(): void {
    this.childrenService.getChildren()
      .subscribe(children => this.children = children);
  }

  constructor(private childrenService: ChildrenService) { }

  ngOnInit(): void {
    this.getChildren();
  }
}
