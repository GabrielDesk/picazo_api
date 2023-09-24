import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreatePaintConfigDto {
  @IsNumber()
  paintId: number;

  @IsNumber()
  robotId: number;

  @IsNumber()
  userId: number;

  @IsString()
  userName: string;

  @IsString()
  robotName: string;

  @IsString()
  firstLog: string;

  @IsBoolean()
  isAProgressPainting: boolean;

  @IsBoolean()
  isPaintPaused: boolean;

  @IsNumber()
  plataformHeight: number;

  @IsNumber()
  plataformWidth: number;

  @IsNumber()
  plataformToRobot: number;

  @IsNumber()
  percentStatus: number;
}
