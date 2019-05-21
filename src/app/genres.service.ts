import { Injectable } from '@angular/core';
import { Genre } from 'src/app/state/app.state';
import { of } from '../../node_modules/rxjs/internal/observable/of';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  genres$: Observable<Genre[]> = this.getGenresFromApi();

  public getGenres(): Observable<Genre[]> {
    return this.genres$;
  }
  private getGenresFromApi(): Observable<Genre[]> {
    console.log('calling getGenresFromApi');
    return of([
      { name: 'Sci-fi'} as Genre,
      { name: 'Thriller'} as Genre
    ]);
  }
}
