import { BookAddDto } from '@app/contracts/books/book.add.dto';
import { bookPatterns } from '@app/contracts/books/book.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_SERVICE') private readonly bookClient: ClientProxy,
  ) {}

  addBook(bookDto: BookAddDto) {
    return this.bookClient.send(bookPatterns.bookCreateBook, bookDto);
  }
  getBooks() {
    return this.bookClient.send(bookPatterns.bookGetAll, {});
  }
  getBook(id: string) {
    return this.bookClient.send(bookPatterns.bookGet, id);
  }
  updateBook(id: string, bookDto: BookAddDto) {
    return this.bookClient.send(bookPatterns.bookUpdateBook, {
      id,
      book: bookDto,
    });
  }
  deleteBook(id: string) {
    return this.bookClient.send(bookPatterns.bookDelete, id);
  }
}
