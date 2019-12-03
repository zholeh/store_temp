import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IProduct {
  'title': string;
  'img': string;
  'price': number;
  'isFavorite': boolean;
}

export const products: IProduct[] = [
  {
    'title': 'Товар 2',
    'img': 'assets/img/product-1.jpg',
    'price': 200,
    'isFavorite': true
  },
  {
    'title': 'Товар 1',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'isFavorite': false
  },
  {
    'title': 'Товар 3',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'isFavorite': true
  },
  {
    'title': 'Товар 4',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'isFavorite': false
  },
  {
    'title': 'Товар 5',
    'img': 'assets/img/product-5.jpg',
    'price': 23,
    'isFavorite': true
  },
  {
    'title': 'Товар 6',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'isFavorite': false
  },
  {
    'title': 'Товар 7',
    'img': 'assets/img/product-7.jpg',
    'price': 334,
    'isFavorite': false
  },
  {
    'title': 'Товар 8',
    'img': 'assets/img/product-8.jpg',
    'price': 22,
    'isFavorite': false
  },
  {
    'title': 'Товар 9',
    'img': 'assets/img/product-9.jpg',
    'price': 1200,
    'isFavorite': true
  }
];


export const products$: Observable<IProduct[]> = of(products)
  .pipe(
    delay(3000)
  );
