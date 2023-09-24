import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RobotDocument = HydratedDocument<Robot>;

@Schema()
export class Robot {
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
  isInACurrentWork: boolean;

  @Prop()
  isTheFirstConection: boolean;

  @Prop()
  ssidRobot: string;

  @Prop()
  passwordRobot: string;

  @Prop()
  LastPaintingIds: [];
}

export const RobotSchema = SchemaFactory.createForClass(Robot);
