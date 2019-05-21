import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksService } from '../books/books.service';
import { Book, Genre } from '../state/app.state';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books$: Observable<Book[]>;
  genres$: Observable<Genre[]>;


  constructor(private booksService: BooksService,
    private genresService: GenresService) { }

  ngOnInit() {
    this.books$ = this.booksService.getBooks();
    this.genres$ = this.genresService.getGenres();
  }

}
