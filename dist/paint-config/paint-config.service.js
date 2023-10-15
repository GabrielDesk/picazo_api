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
exports.PaintConfigService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paint_config_schema_1 = require("./schemas/paint-config.schema");
const mongoose_2 = require("mongoose");
let PaintConfigService = class PaintConfigService {
    constructor(PaintConfigModel) {
        this.PaintConfigModel = PaintConfigModel;
    }
    async createPaintConfig(createPaintConfigDto) {
        const createdForm = new this.PaintConfigModel(createPaintConfigDto);
        return createdForm.save();
    }
    async findAllPaints() {
        return this.PaintConfigModel.find().exec();
    }
    findOnePaintConfig(id) {
        return this.PaintConfigModel.find({
            paintId: id,
        });
    }
    updateStatePaintConfig(updatePaintConfigDto) {
        return this.PaintConfigModel.updateOne({
            paintId: updatePaintConfigDto.id,
        }, {
            $set: {
                isPaintPaused: updatePaintConfigDto.paintState,
            },
        });
    }
    async findLastPaintByUserId(userId) {
        try {
            const lastPaint = await this.PaintConfigModel.findOne({ userId }).sort({
                paintId: 1,
            });
            return lastPaint || null;
        }
        catch (error) {
            console.error('Erro ao encontrar a última pintura:', error);
            throw error;
        }
    }
    removePaintConfig(id) {
        return this.PaintConfigModel.findOneAndRemove({
            _id: id,
        }).exec();
    }
};
PaintConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(paint_config_schema_1.PaintConfig.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaintConfigService);
exports.PaintConfigService = PaintConfigService;
//# sourceMappingURL=paint-config.service.js.map