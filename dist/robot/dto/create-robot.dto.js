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
exports.CreateRobotDto = void 0;
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const class_validator_1 = require("class-validator");
class CreateRobotDto {
}
__decorate([
    (0, decorators_1.ApiProperty)({ description: 'Id do robô.', example: '1' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRobotDto.prototype, "robotId", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Id do usuário.',
        example: '1',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRobotDto.prototype, "userId", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Nome do usuário.',
        example: 'James McAvoy',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "userName", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Email do usuário.',
        example: 'JamesMcAvoy@hotmail.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "userEmail", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Nome do robô.',
        example: 'PICAZO0H56.',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "robotName", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Data do primeiro funcionamento.',
        example: '04/01/2023 - 10:15:30',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "firstLog", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Validação do estado de serviço do robô.',
        example: 'true',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRobotDto.prototype, "isInACurrentWork", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Validação do estado de conexão do robô.',
        example: 'false',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRobotDto.prototype, "isTheFirstConection", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Nome da rede que o robô está conectando.',
        example: 'admin',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "ssidRobot", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Senha da rede que o robô está conectando.',
        example: 'admin123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRobotDto.prototype, "passwordRobot", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Histórico de pinturas do robô.',
        example: '{3, 2, 6}',
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateRobotDto.prototype, "LastPaintingIds", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Validação do estado de ativação do robô.',
        example: 'true',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRobotDto.prototype, "isActiveRobot", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRobotDto.prototype, "LastPaintId", void 0);
exports.CreateRobotDto = CreateRobotDto;
//# sourceMappingURL=create-robot.dto.js.map