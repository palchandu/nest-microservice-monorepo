import { Test, TestingModule } from '@nestjs/testing';
import { BookAppController } from './book-app.controller';
import { BookAppService } from './book-app.service';

describe('BookAppController', () => {
  let bookAppController: BookAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookAppController],
      providers: [BookAppService],
    }).compile();

    bookAppController = app.get<BookAppController>(BookAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookAppController.getHello()).toBe('Hello World!');
    });
  });
});
