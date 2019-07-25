import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { PersonListComponent } from './component/person-list/person-list.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, DynamicFormComponent, PersonListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
