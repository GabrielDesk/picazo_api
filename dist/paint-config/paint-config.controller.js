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
exports.PaintConfigController = void 0;
const common_1 = require("@nestjs/common");
const paint_config_service_1 = require("./paint-config.service");
const create_paint_config_dto_1 = require("./dto/create-paint-config.dto");
let PaintConfigController = class PaintConfigController {
    constructor(paintConfigService) {
        this.paintConfigService = paintConfigService;
    }
    createPaintConfig(createPaintConfigDto) {
        return this.paintConfigService.createPaintConfig(createPaintConfigDto);
    }
    updateStatePaintConfig(updatePaintConfigDto) {
        return this.paintConfigService.updateStatePaintConfig(updatePaintConfigDto);
    }
    updatePercentPaintConfig(updatePercentPaintConfigDto) {
        return this.paintConfigService.updatePercentPaintConfig(updatePercentPaintConfigDto);
    }
    updateProgressPaintConfig(updateProgressPaintConfigDto) {
        return this.paintConfigService.updateProgressPaintConfig(updateProgressPaintConfigDto);
    }
    findAllPaints() {
        return this.paintConfigService.findAllPaints();
    }
    findOnePaintConfig(id) {
        return this.paintConfigService.findOnePaintConfig(+id);
    }
    removePaintConfig(id) {
        return this.paintConfigService.removePaintConfig(+id);
    }
    findLastPaintByUserId(userId) {
        return this.paintConfigService.findLastPaintByUserId(userId);
    }
};
__decorate([
    (0, common_1.Post)('CreatePaintConfig'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paint_config_dto_1.CreatePaintConfigDto]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "createPaintConfig", null);
__decorate([
    (0, common_1.Post)('UpdateStatePaintConfig'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "updateStatePaintConfig", null);
__decorate([
    (0, common_1.Post)('UpdatePercentPaintConfig'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "updatePercentPaintConfig", null);
__decorate([
    (0, common_1.Post)('UpdateProgressPaintConfig'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "updateProgressPaintConfig", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "findAllPaints", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "findOnePaintConfig", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "removePaintConfig", null);
__decorate([
    (0, common_1.Get)('LastPaintByUser/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintConfigController.prototype, "findLastPaintByUserId", null);
PaintConfigController = __decorate([
    (0, common_1.Controller)('paint-config'),
    __metadata("design:paramtypes", [paint_config_service_1.PaintConfigService])
], PaintConfigController);
exports.PaintConfigController = PaintConfigController;
//# sourceMappingURL=paint-config.controller.js.map