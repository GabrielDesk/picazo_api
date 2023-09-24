import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { FormModule } from './form/form.module';
import { ConfigModule } from '@nestjs/config';
import { RobotModule } from './robot/robot.module';
import { PaintConfigModule } from './paint-config/paint-config.module';

const configService: ConfigService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      configService.get<string>('DATABASE_CONNECTION_STRING'),
    ),
    FormModule,
    RobotModule,
    PaintConfigModule,
  ],
})
export class AppModule {}
