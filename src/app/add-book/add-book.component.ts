import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GenresService } from 'src/app/genres.service';
import { Observable } from '../../../node_modules/rxjs';
import { Genre, Book } from 'src/app/state/app.state';
import { BooksService } from 'src/app/books/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books$: Observable<Book[]>;
  genres$: Observable<Genre[]>;

  bookForm = this.fb.group({
    title: [''],
    author: ['']
  });
  constructor(private fb: FormBuilder,
    private booksService: BooksService,
    private genresService: GenresService) { }


  ngOnInit() {
    this.genres$ = this.genresService.getGenres();

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.booksService.addBook(this.bookForm.value as Book);
    console.warn(this.bookForm.value);

  }
}
