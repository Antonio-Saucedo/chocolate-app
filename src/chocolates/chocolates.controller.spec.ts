import { Test, TestingModule } from '@nestjs/testing';
import { ChocolatesController } from './chocolates.controller';

describe('ChocolatesController', () => {
  let controller: ChocolatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChocolatesController],
    }).compile();

    controller = module.get<ChocolatesController>(ChocolatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
