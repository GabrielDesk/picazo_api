"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const robot_controller_1 = require("./robot.controller");
const robot_service_1 = require("./robot.service");
describe('RobotController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [robot_controller_1.RobotController],
            providers: [robot_service_1.RobotService],
        }).compile();
        controller = module.get(robot_controller_1.RobotController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=robot.controller.spec.js.map