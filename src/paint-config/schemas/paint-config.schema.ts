import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaintConfigDocument = HydratedDocument<PaintConfig>;

@Schema()
export class PaintConfig {
  @Prop()
  paintId: number;

  @Prop()
  robotId: number;

  @Prop()
  userId: number;

  @Prop()
  userName: string;

  @Prop()
  robotName: string;

  @Prop()
  firstLog: string;

  @Prop()
  isAProgressPainting: boolean;

  @Prop()
  isPaintPaused: boolean;

  @Prop()
  plataformHeight: number;

  @Prop()
  plataformWidth: number;

  @Prop()
  plataformToRobot: number;

  @Prop()
  percentStatus?: number = null;
}

export const PaintConfigSchema = SchemaFactory.createForClass(PaintConfig);
