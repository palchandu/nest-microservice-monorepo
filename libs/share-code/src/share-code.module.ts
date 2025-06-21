import { Module } from '@nestjs/common';
import { ShareCodeService } from './share-code.service';

@Module({
  providers: [ShareCodeService],
  exports: [ShareCodeService],
})
export class ShareCodeModule {}
