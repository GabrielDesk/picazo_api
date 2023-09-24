import { Module } from '@nestjs/common';
import { PaintConfigService } from './paint-config.service';
import { PaintConfigController } from './paint-config.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaintConfig, PaintConfigSchema } from './schemas/paint-config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaintConfig.name, schema: PaintConfigSchema },
    ]),
  ],
  controllers: [PaintConfigController],
  providers: [PaintConfigService],
})
export class PaintConfigModule {}
