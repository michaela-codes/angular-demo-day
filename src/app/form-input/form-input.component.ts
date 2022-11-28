import { Component, OnInit, Input } from '@angular/core';;
import { Child } from '../child';
import { ActivatedRoute } from '@angular/router';
import { Location, Time } from '@angular/common';
import { ChildrenService } from '../children.service';
import { FormControl } from '@angular/forms';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  child: Child = new Child[]
  name = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private childrenService: ChildrenService,
    private location: Location
  ) {}

  add(child: Child): void {
    if (this.child) {
    this.childrenService
      .addChild(child)
      .subscribe((child: Child) => {
        this.child.push(child);
      });
  }}

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    
  }
}

