import { Controller, Param } from '@nestjs/common';
import { BookAppService } from './book-app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { bookPatterns } from '@app/contracts';
import { BookAddDto } from '@app/contracts/books/book.add.dto';

@Controller()
export class BookAppController {
  constructor(private readonly bookAppService: BookAppService) {}

  @MessagePattern(bookPatterns.bookHello)
  getHello() {
    return this.bookAppService.getHello();
  }
  @MessagePattern(bookPatterns.bookGetAll)
  getBooks() {
    return this.bookAppService.getBooks();
  }

  @MessagePattern(bookPatterns.bookCreateBook)
  createBook(@Payload() book: BookAddDto) {
    console.log('Received book data:', book);
    return this.bookAppService.createBook(book);
  }
  @MessagePattern(bookPatterns.bookUpdateBook)
  updateBook(@Payload() book: BookAddDto, @Param('id') id: string) {
    return this.bookAppService.updateBook(id, book);
  }
  @MessagePattern(bookPatterns.bookDeleteBook)
  deleteBook(@Payload() id: string) {
    return this.bookAppService.deleteBook(id);
  }
}
