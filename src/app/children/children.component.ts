import { Component, OnInit } from '@angular/core';
import { Child } from '../child'
import { ChildrenService } from '../children.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

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

  deleteChild(id: string): void {
    this.childrenService.deleteChild(id).subscribe(() => {
      this.children = this.children.filter((child) => {return child.id !== id});
      console.log('deleted')
    });
  }
  constructor(
    private childrenService: ChildrenService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getChildren();
  }
}