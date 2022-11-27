import { Component, OnInit, Input } from '@angular/core';;
import { Child } from '../child';
import { ActivatedRoute } from '@angular/router';
import { Location, Time } from '@angular/common';
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

  add(childName: string, childAge: number, childAllergies: string, childBedtime: Time, childFavFood: string): void {
    if (this.child) {
    this.childrenService
      .addChild({
        name: childName,
        age: childAge,
        allergies: childAllergies,
        bedtime: childBedtime,
        favFood: childFavFood

      } as Child)
      .subscribe((child: Child) => {
        this.children.push(child);
      });
  }}

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    
  }
}

