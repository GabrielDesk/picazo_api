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
exports.RobotController = void 0;
const common_1 = require("@nestjs/common");
const robot_service_1 = require("./robot.service");
const create_robot_dto_1 = require("./dto/create-robot.dto");
const swagger_1 = require("@nestjs/swagger");
let RobotController = class RobotController {
    constructor(robotService) {
        this.robotService = robotService;
    }
    create(createRobotDto) {
        return this.robotService.create(createRobotDto);
    }
    findAllRobotsRegistered() {
        return this.robotService.findAllRobotsRegistered();
    }
    findOneRobot(id) {
        return this.robotService.findOneRobot(+id);
    }
    updateRobotOwnerInfo(id, updateRobotOwnerInfoDto) {
        return this.robotService.updateRobotOwnerInfo(+id, updateRobotOwnerInfoDto);
    }
    updateRobotInternet(id, updateRobotInternetDto) {
        return this.robotService.updateRobotInternet(+id, updateRobotInternetDto);
    }
    updateRobotPaintState(id, updateRobotStateDto) {
        return this.robotService.updateRobotPaintState(+id, updateRobotStateDto);
    }
    disactiveRobot(id) {
        return this.robotService.disactiveRobot(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        description: 'Método que cadastra o form criado pelo usuário.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_robot_dto_1.CreateRobotDto]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'Método que busca todos os forms do Database.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "findAllRobotsRegistered", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        description: 'Método que busca todos os forms do usuário. O parâmetro Id refere-se ao id do usuário firebase.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "findOneRobot", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        description: 'Método que atualiza o form.',
    }),
    (0, swagger_1.ApiBody)({
        type: create_robot_dto_1.CreateRobotDto,
        examples: {
            a: {
                summary: 'Update body',
                description: 'Dados utilizados para atualização do form. A variável Id refere-se ao id form',
                value: {
                    userName: 'Ronaldo Fenômeno',
                    userEmail: 'JamesMcAvoy@hotmail.com',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "updateRobotOwnerInfo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "updateRobotInternet", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "updateRobotPaintState", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RobotController.prototype, "disactiveRobot", null);
RobotController = __decorate([
    (0, swagger_1.ApiTags)('robot'),
    (0, common_1.Controller)('robot'),
    __metadata("design:paramtypes", [robot_service_1.RobotService])
], RobotController);
exports.RobotController = RobotController;
//# sourceMappingURL=robot.controller.js.map