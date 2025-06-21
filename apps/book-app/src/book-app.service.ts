import { Injectable } from '@nestjs/common';

@Injectable()
export class BookAppService {
  getHello() {
    return 'Hello World! from book service and book-app!';
  }

  // createBook
  createBook(book: any) {
    return `Book created! ID: ${book}`;
  }
  // getBook
  getBook(id: string) {
    return `Book details! ID: ${id}`;
  }
  // getBooks
  getBooks() {
    return 'List of books!';
  }
  // updateBook
  updateBook(book: any) {
    return `Book updated! ID: ${book}`;
  }
  // deleteBook
  deleteBook(id: string) {
    return `Book deleted! ID: ${id}`;
  }
}
