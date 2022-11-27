import { Component, OnInit, Input } from '@angular/core';;
import { Child } from '../child';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChildrenService } from '../children.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  @Input() child?: Child;
  name = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private childrenService: ChildrenService,
    private location: Location
  ) {}

  addChild(): void {
    if (this.child) {
    this.childrenService
      .addChild(this.child)
      .subscribe(() => this.goBack());
  }}

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this.addChild();
  }
}

