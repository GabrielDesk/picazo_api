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
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/swagger/dist");
const api_body_decorator_1 = require("@nestjs/swagger/dist/decorators/api-body.decorator");
const api_operation_decorator_1 = require("@nestjs/swagger/dist/decorators/api-operation.decorator");
const create_form_dto_1 = require("./dto/create-form.dto");
const update_form_dto_1 = require("./dto/update-form.dto");
const form_service_1 = require("./form.service");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    create(createFormDto) {
        return this.formService.create(createFormDto);
    }
    findAll() {
        return this.formService.findAll();
    }
    findOne(id) {
        return this.formService.findOne(id);
    }
    update(id, updateFormDto) {
        return this.formService.update(id, updateFormDto);
    }
    remove(id) {
        return this.formService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, api_operation_decorator_1.ApiOperation)({
        description: 'Método que cadastra o form criado pelo usuário.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_dto_1.CreateFormDto]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, api_operation_decorator_1.ApiOperation)({
        description: 'Método que busca todos os forms do Database.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, api_operation_decorator_1.ApiOperation)({
        description: 'Método que busca todos os forms do usuário. O parâmetro Id refere-se ao id do usuário firebase.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, api_operation_decorator_1.ApiOperation)({
        description: 'Método que atualiza o form.',
    }),
    (0, api_body_decorator_1.ApiBody)({
        type: update_form_dto_1.UpdateFormDto,
        examples: {
            a: {
                summary: 'Update body',
                description: 'Dados utilizados para atualização do form. A variável Id refere-se ao id form',
                value: {
                    name: 'Ronaldo Fenômeno',
                    email: 'zuurc@hotmail.com',
                    birthDate: '2023-03-14',
                    description: 'Ronaldo 2.0',
                    cpf: '448.774.158-07',
                    country: 'Brazil',
                    state: 'Alagoas',
                    city: 'Campo Grande',
                    user: 'essurblKYxgVps6DsRiQH9GS1nl1',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_form_dto_1.UpdateFormDto]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, api_operation_decorator_1.ApiOperation)({
        description: 'Método que deleta o form.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "remove", null);
FormController = __decorate([
    (0, dist_1.ApiTags)('form'),
    (0, common_1.Controller)('form'),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map