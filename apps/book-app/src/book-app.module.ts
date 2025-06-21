import { Module } from '@nestjs/common';
import { BookAppController } from './book-app.controller';
import { BookAppService } from './book-app.service';

@Module({
  imports: [],
  controllers: [BookAppController],
  providers: [BookAppService],
})
export class BookAppModule {}
