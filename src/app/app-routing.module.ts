import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'children', pathMatch: 'full' },
  { path: 'children', component: ChildrenComponent },
  { path: 'detail/:id', component: ChildDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
