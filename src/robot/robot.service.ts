import { Injectable } from '@nestjs/common';
import { CreateRobotDto } from './dto/create-robot.dto';
// import { UpdateRobotDto } from './dto/update-robot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Robot, RobotDocument } from './schemas/robot.schema';
import { Model } from 'mongoose';

@Injectable()
export class RobotService {
  constructor(
    @InjectModel(Robot.name) private RobotModel: Model<RobotDocument>,
  ) {}

  create(createRobotDto: CreateRobotDto) {
    const createdForm = new this.RobotModel(createRobotDto);
    return createdForm.save();
  }

  async findAllRobotsRegistered(): Promise<Robot[]> {
    return this.RobotModel.find().exec();
  }

  findOneRobot(id: number) {
    return this.RobotModel.find({
      robotId: id,
    });
  }

  startRobotPaint(id: number, LastPaintingId: number) {
    return this.RobotModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          LastPaintingIds: LastPaintingId,
        },
      },
    );
  }
  updateRobotOwnerInfo(
    id: number,
    updateRobotOwnerInfoDto: { userName: string; userEmail: string },
  ) {
    return this.RobotModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          userName: updateRobotOwnerInfoDto.userName,
          userEmail: updateRobotOwnerInfoDto.userEmail,
        },
      },
    );
  }

  updateRobotInternet(
    id: number,
    updateRobotInternetDto: { ssidRobot: string; passwordRobot: string },
  ) {
    return this.RobotModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ssidRobot: updateRobotInternetDto.ssidRobot,
          passwordRobot: updateRobotInternetDto.passwordRobot,
        },
      },
    );
  }

  updateRobotPaintState(
    id: number,
    updateRobotStateDto: {
      isInACurrentWork: boolean;
      isTheFirstConection: boolean;
    },
  ) {
    return this.RobotModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          isInACurrentWork: updateRobotStateDto.isInACurrentWork,
          isTheFirstConection: updateRobotStateDto.isTheFirstConection,
        },
      },
    );
  }

  disactiveRobot(id: number) {
    return this.RobotModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          isActiveRobot: false,
        },
      },
    );
  }
}
