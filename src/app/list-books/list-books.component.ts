import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books/books.service';
import { Book } from '../state/app.state';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books$ = this.booksService.getBooks();
  }

}
