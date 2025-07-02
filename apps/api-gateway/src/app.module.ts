import { Module } from '@nestjs/common';
import { ShareLibraryModule } from '@app/share-library';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ShareLibraryModule,
    AuthModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
