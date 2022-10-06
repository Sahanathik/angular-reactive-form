import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { NewReactiveFormComponent } from './new-reactive-form/new-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyReactiveFormComponent,
    NewReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
