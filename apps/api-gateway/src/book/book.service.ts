import { bookPatterns } from '@app/contracts/books/book.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_SERVICE') private readonly bookClient: ClientProxy,
  ) {}

  getHello() {
    return this.bookClient.send(bookPatterns.bookHello, {});
  }
}
