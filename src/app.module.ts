import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChocolatesModule } from './chocolates/chocolates.module';

@Module({
  imports: [ChocolatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
