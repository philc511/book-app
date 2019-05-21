import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  subj: BehaviorSubject<Book[]>;

  books: Book[] = [
    { title: 'The Hobbit'} as Book,
    { title: 'Lord of the Rings'} as Book,
    { title: 'Game of Thrones'} as Book
  ];

  constructor() {
    this.subj = new BehaviorSubject<Book[]>(this.books);
  }
  addBook(book: Book) {
    this.books.push(book);
    this.subj.next(this.books);
  }

  public getBooks(): Observable<Book[]> {
    return this.subj;
  }
}
