"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotModule = void 0;
const common_1 = require("@nestjs/common");
const robot_service_1 = require("./robot.service");
const robot_controller_1 = require("./robot.controller");
const robot_schema_1 = require("./schemas/robot.schema");
const mongoose_1 = require("@nestjs/mongoose");
let RobotModule = class RobotModule {
};
RobotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: robot_schema_1.Robot.name, schema: robot_schema_1.RobotSchema }]),
        ],
        controllers: [robot_controller_1.RobotController],
        providers: [robot_service_1.RobotService],
    })
], RobotModule);
exports.RobotModule = RobotModule;
//# sourceMappingURL=robot.module.js.map