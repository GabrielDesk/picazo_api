"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const form_controller_1 = require("./form.controller");
const form_service_1 = require("./form.service");
describe.skip('FormController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [form_controller_1.FormController],
            providers: [form_service_1.FormService],
        }).compile();
        controller = module.get(form_controller_1.FormController);
    });
    it.skip('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=form.controller.spec.js.map