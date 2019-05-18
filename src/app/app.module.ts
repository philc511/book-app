import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBooksComponent } from './list-books/list-books.component';
import {StoreModule} from "@ngrx/store"
import {reducer} from "./state/app.state"


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
