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

  addChild(newChild: Child): void {
    this.childrenService
      .addChild(newChild)
      .subscribe((child) => this.children.push(child));
  }

  deleteChild(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.childrenService.deleteChild(id).subscribe();
  }

  constructor(
    private childrenService: ChildrenService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChildren();
    this.deleteChild();
  }
}