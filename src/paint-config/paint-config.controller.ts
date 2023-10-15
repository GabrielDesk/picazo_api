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
  // startPaint(
  //   @Param('id') id: string,
  //   @Body() updatePaintConfigDto: UpdatePaintConfigDto,
  // ) {
  //   return this.paintConfigService.startPaint(+id, updatePaintConfigDto);
  // }

  @Delete(':id')
  removePaintConfig(@Param('id') id: number) {
    return this.paintConfigService.removePaintConfig(+id);
  }

  @Get('LastPaintByUser/:userId') // Use userId como parte da rota
  findLastPaintByUserId(@Param('userId') userId: number) {
    // Use 'userId' no decorator @Param
    return this.paintConfigService.findLastPaintByUserId(userId);
  }
}
