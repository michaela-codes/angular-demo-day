import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ChildrenComponent } from './children/children.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChildrenComponent,
    ChildDetailComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
