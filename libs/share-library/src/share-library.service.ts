import { Injectable } from '@nestjs/common';

@Injectable()
export class ShareLibraryService {
  // Add your service methods and logic here
  getGreeting(): string {
    return 'Hello from Share Library!';
  }
}
