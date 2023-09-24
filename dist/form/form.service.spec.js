"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const testing_1 = require("@nestjs/testing");
const create_form_dto_1 = require("./dto/create-form.dto");
const form_service_1 = require("./form.service");
const form_schema_1 = require("./schemas/form.schema");
describe.only('FormService', () => {
    let formService;
    beforeAll(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                form_service_1.FormService,
                {
                    provide: (0, mongoose_1.getModelToken)(form_schema_1.Form.name),
                    useValue: {
                        new: jest.fn().mockResolvedValue(new form_schema_1.Form()),
                        constructor: jest.fn().mockResolvedValue(new form_schema_1.Form()),
                        find: jest.fn(),
                        findById: jest.fn(),
                        create: jest.fn(),
                        save: jest.fn(),
                    },
                },
            ],
        }).compile();
        formService = module.get(form_service_1.FormService);
    });
    it('should call create form method with expected params', async () => {
        const createNoteSpy = jest.spyOn(formService, 'create');
        const dto = new create_form_dto_1.CreateFormDto();
        formService.create(dto);
        expect(createNoteSpy).toHaveBeenCalledWith(dto);
    });
});
//# sourceMappingURL=form.service.spec.js.map