import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  userName: string;

  // User Email
  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  // User Password
  @IsString()
  @IsNotEmpty()
  userPassword: string;

  // User Photo Uri
  @IsString()
  @IsNotEmpty()
  userPhotoUri: string;

  // First Log
  @IsString()
  @IsNotEmpty()
  firstLog: string;

  // Robot Id
  @IsArray()
  @IsNotEmpty()
  robotsIds: number[];

  // Hist Paint
  @IsArray()
  @IsNotEmpty()
  histPaint: number[];

  // Last Painting Id
  @IsNumber()
  @IsNotEmpty()
  lastPaintId: number;

  // SSID Robots
  @IsString()
  @IsNotEmpty()
  ssidRobots: string;

  // Password Robots
  @IsString()
  @IsNotEmpty()
  passwordRobots: string;
}
