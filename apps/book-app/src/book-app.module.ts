import { Module } from '@nestjs/common';
import { BookAppController } from './book-app.controller';
import { BookAppService } from './book-app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.BOOK_APP_MONGODB_URI ?? 'mongodb://localhost:27017/books',
    ),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookAppController],
  providers: [BookAppService],
})
export class BookAppModule {}
