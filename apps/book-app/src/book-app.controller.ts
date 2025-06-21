import { Controller } from '@nestjs/common';
import { BookAppService } from './book-app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { bookPatterns } from '@app/contracts';

@Controller()
export class BookAppController {
  constructor(private readonly bookAppService: BookAppService) {}

  @MessagePattern(bookPatterns.bookHello)
  getHello() {
    return this.bookAppService.getHello();
  }
  @MessagePattern(bookPatterns.bookGetBooks)
  getBooks() {
    return this.bookAppService.getBooks();
  }

  @MessagePattern(bookPatterns.bookCreateBook)
  createBook(@Payload() book: any) {
    return this.bookAppService.createBook(book);
  }
  @MessagePattern(bookPatterns.bookUpdateBook)
  updateBook(book: any) {
    return this.bookAppService.updateBook(book);
  }
  @MessagePattern(bookPatterns.bookDeleteBook)
  deleteBook(id: string) {
    return this.bookAppService.deleteBook(id);
  }
}
