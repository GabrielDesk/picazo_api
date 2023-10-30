/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class Robot {
  @Prop()
  robotId: number;

  @Prop()
  robotName: string;
}

const RobotSchema = SchemaFactory.createForClass(Robot);

@Schema()
export class User {
  @Prop()
  userId: number;

  @Prop()
  userName: string;

  @Prop()
  userEmail: string;

  @Prop()
  userPassword: string;

  @Prop()
  userPhotoUri: string;

  @Prop()
  firstLog: string;

  @Prop([RobotSchema])
  robots: Robot[];

  @Prop([String])
  histPaint: string[];

  @Prop()
  lastPaintId: number;

  @Prop()
  ssidRobots: string;

  @Prop()
  passwordRobots: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
