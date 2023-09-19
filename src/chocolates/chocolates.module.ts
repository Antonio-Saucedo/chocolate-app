import { Module } from '@nestjs/common';
import { ChocolatesService } from './chocolates.service';
import { ChocolatesController } from './chocolates.controller';

@Module({
  controllers: [ChocolatesController],
  providers: [ChocolatesService],
})
export class ChocolatesModule {}
