import { Controller } from '@nestjs/common';
import { AuthAppService } from './auth-app.service';
import { MessagePattern } from '@nestjs/microservices';
import { BookAddDto } from '@app/contracts/books/book.add.dto';
@Controller()
export class AuthAppController {
  constructor(private readonly authAppService: AuthAppService) {}

  @MessagePattern('auth.hello')
  getHello(bookData: BookAddDto): string {
    return this.authAppService.getHello(bookData);
  }
}
