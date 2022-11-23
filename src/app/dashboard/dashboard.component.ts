import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { ChildrenService } from '../children.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  children: Child[] = [];

  getChildren(): void {
    this.childrenService
      .getChild()
      .subscribe((children) => (this.children = children));
  }

  constructor(private childrenService: ChildrenService) {}

  ngOnInit(): void {
    this.getChildren();
  }
}
