import { BookAddDto } from '@app/contracts/books/book.add.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAppService {
  getHello(bookDto: BookAddDto): string {
    return `Hello ${bookDto.title} by ${bookDto.author} from auth service and auth-app!`;
  }
}
