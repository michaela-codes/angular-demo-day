import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Child } from '../child';
import { ChildrenService } from '../children.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() child?: Child;

  children: Child[] = [];

  constructor(
    private route: ActivatedRoute,
    private childrenService: ChildrenService,
    private location: Location
  ) {}

  add(newChild: Child): void {
    this.childrenService
      .add(newChild)
      .subscribe((newChild: Child) => this.children.push(newChild));
  }

  ngOnInit(): void {
    this.add(<Child>{});
  }
}
