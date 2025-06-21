import { NestFactory } from '@nestjs/core';
import { AuthAppModule } from './auth-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthAppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 6369,
      },
    },
  );
  await app.listen();
}
void bootstrap();
