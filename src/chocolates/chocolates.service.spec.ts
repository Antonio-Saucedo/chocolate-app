import { Test, TestingModule } from '@nestjs/testing';
import { ChocolatesService } from './chocolates.service';

describe('ChocolatesService', () => {
  let service: ChocolatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChocolatesService],
    }).compile();

    service = module.get<ChocolatesService>(ChocolatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
