import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookAddDto } from '@app/contracts/books/book.add.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('add')
  addBook(@Body() bookDto: BookAddDto) {
    console.log('Received book data:', bookDto);
    return this.bookService.addBook(bookDto);
  }
  @Get('getAll')
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get('get/:id')
  getBook(@Body('id') id: string) {
    return this.bookService.getBook(id);
  }
  @Patch('update/:id')
  updateBook(@Body('id') id: string, @Body() bookDto: BookAddDto) {
    return this.bookService.updateBook(id, bookDto);
  }
  @Delete('delete/:id')
  deleteBook(@Body('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
