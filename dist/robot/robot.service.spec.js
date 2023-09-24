"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const robot_service_1 = require("./robot.service");
describe('RobotService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [robot_service_1.RobotService],
        }).compile();
        service = module.get(robot_service_1.RobotService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=robot.service.spec.js.map