export interface State {
  books: Book[];
}

export interface Genre {
  name: string;
}

export interface Book {
  title: string;
  author: string;
}
const initialState: State = {books: []};

export function reducer(state: State, action) {

  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
         books: [...state.books, action.payload],
      };

      default:
      return state;
  }
}
