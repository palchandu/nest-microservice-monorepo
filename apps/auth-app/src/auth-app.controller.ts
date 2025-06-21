import { Controller } from '@nestjs/common';
import { AuthAppService } from './auth-app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthAppController {
  constructor(private readonly authAppService: AuthAppService) {}

  @MessagePattern('auth.hello')
  getHello(): string {
    return this.authAppService.getHello();
  }
}
