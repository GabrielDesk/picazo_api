"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const paint_config_controller_1 = require("./paint-config.controller");
const paint_config_service_1 = require("./paint-config.service");
describe('PaintConfigController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [paint_config_controller_1.PaintConfigController],
            providers: [paint_config_service_1.PaintConfigService],
        }).compile();
        controller = module.get(paint_config_controller_1.PaintConfigController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=paint-config.controller.spec.js.map