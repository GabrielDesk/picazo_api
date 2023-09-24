import { PartialType } from '@nestjs/swagger';
import { CreatePaintConfigDto } from './create-paint-config.dto';

export class UpdatePaintConfigDto extends PartialType(CreatePaintConfigDto) {}
