import { Test, TestingModule } from '@nestjs/testing';
import { PaintConfigService } from './paint-config.service';

describe('PaintConfigService', () => {
  let service: PaintConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaintConfigService],
    }).compile();

    service = module.get<PaintConfigService>(PaintConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
