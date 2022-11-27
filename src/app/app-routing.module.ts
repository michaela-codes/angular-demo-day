import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { FormComponent } from './form/form.component';
import { FormInputComponent } from './form-input/form-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'children', pathMatch: 'full' },
  { path: 'children', component: ChildrenComponent },
  { path: 'detail/:id', component: ChildDetailComponent },
  { path: 'new-child', component: FormInputComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
