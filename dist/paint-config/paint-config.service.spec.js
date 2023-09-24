"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const paint_config_service_1 = require("./paint-config.service");
describe('PaintConfigService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [paint_config_service_1.PaintConfigService],
        }).compile();
        service = module.get(paint_config_service_1.PaintConfigService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=paint-config.service.spec.js.map