import { Module } from '@nestjs/common';
import { RobotService } from './robot.service';
import { RobotController } from './robot.controller';
import { Robot, RobotSchema } from './schemas/robot.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Robot.name, schema: RobotSchema }]),
  ],
  controllers: [RobotController],
  providers: [RobotService],
})
export class RobotModule {}
