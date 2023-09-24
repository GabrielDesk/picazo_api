import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaintConfigService } from './paint-config.service';
import { CreatePaintConfigDto } from './dto/create-paint-config.dto';

@Controller('paint-config')
export class PaintConfigController {
  constructor(private readonly paintConfigService: PaintConfigService) {}

  @Post('CreatePaintConfig')
  createPaintConfig(@Body() createPaintConfigDto: CreatePaintConfigDto) {
    return this.paintConfigService.createPaintConfig(createPaintConfigDto);
  }

  @Post('UpdateStatePaintConfig')
  updateStatePaintConfig(
    @Body()
    updatePaintConfigDto: {
      id: number;
      paintState: boolean;
    },
  ) {
    return this.paintConfigService.updateStatePaintConfig(updatePaintConfigDto);
  }

  @Get()
  findAllPaints() {
    return this.paintConfigService.findAllPaints();
  }

  @Get(':id')
  findOnePaintConfig(@Param('id') id: number) {
    return this.paintConfigService.findOnePaintConfig(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePaintConfigDto: UpdatePaintConfigDto) {
  //   return this.paintConfigService.update(+id, updatePaintConfigDto);
  // }

  @Delete(':id')
  removePaintConfig(@Param('id') id: string) {
    return this.paintConfigService.removePaintConfig(+id);
  }
}
