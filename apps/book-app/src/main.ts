import { NestFactory } from '@nestjs/core';
import { BookAppModule } from './book-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookAppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 6380,
      },
    },
  );
  await app.listen();
}
void bootstrap();
