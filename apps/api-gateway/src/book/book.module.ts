import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // Register the microservice client for the Book service
    ClientsModule.register([
      {
        name: 'BOOK_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 6380, // Ensure this port matches the Book service's port
        },
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
