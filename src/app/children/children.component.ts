import { Component, OnInit } from '@angular/core';
import { Child } from '../child'
import { ChildrenService } from '../children.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  children: Child[] = [];
  //newChild: Child[] = [];

  getChildren(): void {
    this.childrenService
      .getChildren()
      .subscribe((children) => (this.children = children));
  }

  add(newChild: Child): void {
    this.childrenService
      .add(newChild)
      .subscribe((child: Child) => this.children.push(child));
  }


  constructor(
    private childrenService: ChildrenService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChildren();
  }
}