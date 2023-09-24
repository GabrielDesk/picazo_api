import { Test, TestingModule } from '@nestjs/testing';
import { PaintConfigController } from './paint-config.controller';
import { PaintConfigService } from './paint-config.service';

describe('PaintConfigController', () => {
  let controller: PaintConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaintConfigController],
      providers: [PaintConfigService],
    }).compile();

    controller = module.get<PaintConfigController>(PaintConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
