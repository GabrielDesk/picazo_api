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
exports.UpdateRobotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_robot_dto_1 = require("./create-robot.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateRobotDto extends (0, mapped_types_1.PartialType)(create_robot_dto_1.CreateRobotDto) {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRobotDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Validação do estado de serviço do robô.',
        example: 'true',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRobotDto.prototype, "isInACurrentWork", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Validação do estado de conexão do robô.',
        example: 'false',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRobotDto.prototype, "isTheFirstConection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome da rede que o robô está conectando.',
        example: 'admin',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRobotDto.prototype, "ssidRobot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha da rede que o robô está conectando.',
        example: 'admin123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRobotDto.prototype, "passwordRobot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Histórico de pinturas do robô.',
        example: '{3, 2, 6}',
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateRobotDto.prototype, "LastPaintingIds", void 0);
exports.UpdateRobotDto = UpdateRobotDto;
//# sourceMappingURL=update-robot.dto.js.map