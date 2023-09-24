"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const robot_schema_1 = require("./schemas/robot.schema");
const mongoose_2 = require("mongoose");
let RobotService = class RobotService {
    constructor(RobotModel) {
        this.RobotModel = RobotModel;
    }
    create(createRobotDto) {
        const createdForm = new this.RobotModel(createRobotDto);
        return createdForm.save();
    }
    async findAllRobotsRegistered() {
        return this.RobotModel.find().exec();
    }
    findOneRobot(id) {
        return this.RobotModel.find({
            robotId: id,
        });
    }
    startRobotPaint(id, LastPaintingId) {
        return this.RobotModel.updateOne({
            _id: id,
        }, {
            $set: {
                LastPaintingIds: LastPaintingId,
            },
        });
    }
    updateRobotOwnerInfo(id, updateRobotOwnerInfoDto) {
        return this.RobotModel.updateOne({
            _id: id,
        }, {
            $set: {
                userName: updateRobotOwnerInfoDto.userName,
                userEmail: updateRobotOwnerInfoDto.userEmail,
            },
        });
    }
    updateRobotInternet(id, updateRobotInternetDto) {
        return this.RobotModel.updateOne({
            _id: id,
        }, {
            $set: {
                ssidRobot: updateRobotInternetDto.ssidRobot,
                passwordRobot: updateRobotInternetDto.passwordRobot,
            },
        });
    }
    updateRobotPaintState(id, updateRobotStateDto) {
        return this.RobotModel.updateOne({
            _id: id,
        }, {
            $set: {
                isInACurrentWork: updateRobotStateDto.isInACurrentWork,
                isTheFirstConection: updateRobotStateDto.isTheFirstConection,
            },
        });
    }
    disactiveRobot(id) {
        return this.RobotModel.updateOne({
            _id: id,
        }, {
            $set: {
                isActiveRobot: false,
            },
        });
    }
};
RobotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(robot_schema_1.Robot.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RobotService);
exports.RobotService = RobotService;
//# sourceMappingURL=robot.service.js.map