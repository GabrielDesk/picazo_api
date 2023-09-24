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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormDto = void 0;
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const class_validator_1 = require("class-validator");
class CreateFormDto {
}
__decorate([
    (0, decorators_1.ApiProperty)({ description: 'Nome do usuário.', example: 'João da Silva' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "name", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Email do usuário.',
        example: 'joao.silva@exaxmple.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "email", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Data de nascimento do usuário.',
        example: '1995-01-01',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "birthDate", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Descrição sobre o usuário.',
        example: 'Sou uma pessoa tranquila e gosto, de viajar.',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "description", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Número do CPF do usuário.',
        example: '123.456.789-01',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "cpf", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({ description: 'País do usuário.', example: 'Brasil' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "country", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({ description: 'Estado do usuário.', example: 'São Paulo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "state", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({ description: 'Cidade do usuário.', example: 'Campinas' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "city", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Id do usuário no firebase.',
        example: 'essurblKYxgVps6DsRiQH9GS1nl1',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFormDto.prototype, "user", void 0);
exports.CreateFormDto = CreateFormDto;
//# sourceMappingURL=create-form.dto.js.map