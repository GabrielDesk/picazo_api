/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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

  @Prop([Number]) // Define o tipo de elementos na matriz, nesse caso, números.
  robotsIds: number[];

  @Prop([String]) // Define o tipo de elementos na matriz, nesse caso, strings.
  histPaint: string[];

  @Prop()
  lastPaintId: number;

  @Prop()
  ssidRobots: string;

  @Prop()
  passwordRobots: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
