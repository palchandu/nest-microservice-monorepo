import { BookAddDto } from '@app/contracts/books/book.add.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookAppService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
  ) {}
  getHello() {
    return 'Hello World! from book service and book-app!';
  }

  // createBook
  async createBook(book: BookAddDto) {
    const newBook = new this.bookModel(book);
    const saveRes = await newBook.save();
    return saveRes;
  }
  // getBook
  async getBook(id: string) {
    return await this.bookModel.findById(id).exec();
  }
  // getBooks
  async getBooks() {
    return await this.bookModel.find().exec();
  }
  // updateBook
  async updateBook(id: string, book: BookAddDto) {
    return await this.bookModel
      .findByIdAndUpdate(id, book, { new: true })
      .exec();
  }
  // deleteBook
  async deleteBook(id: string) {
    return await this.bookModel.findByIdAndDelete(id).exec();
  }
}
