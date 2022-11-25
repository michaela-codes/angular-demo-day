import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../child';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChildrenService } from '../children.service';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent {
  child: Child | undefined;

  constructor (
    private route: ActivatedRoute,
    private childrenService: ChildrenService,
    private location: Location
  ) {}

  getChild(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.childrenService.getChild(name)
      .subscribe(child => this.child = child);
  }

  goBack(): void {
    this.location.back();
  }

  //save(): void {
  //  if (this.child) {
   //   this.childrenService.updateChild(this.child)
    //    .subscribe(() => this.goBack())
    //}
  //}

  ngOnInit(): void {
    this.getChild()
  }
}
