import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ChildrenComponent } from './children/children.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChildDetailComponent } from './child-detail/child-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChildrenComponent,
    ChildDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
