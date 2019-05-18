import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Book } from '../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [
    { title: 'The Hobbit'} as Book
  ];

  // AddBook() {

  // }

  public getBooks(): Observable<Book[]> {
    return of(this.books);
  }
}
