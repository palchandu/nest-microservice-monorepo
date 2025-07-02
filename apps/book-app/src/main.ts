import { NestFactory } from '@nestjs/core';
import { BookAppModule } from './book-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookAppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.BOOK_APP_HOST ?? 'localhost',
        port: Number(process.env.BOOK_APP_PORT) || 6380,
      },
    },
  );
  // connect mongodb
  await app.listen();
}
void bootstrap();
