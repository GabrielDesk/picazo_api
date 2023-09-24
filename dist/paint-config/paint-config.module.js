"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintConfigModule = void 0;
const common_1 = require("@nestjs/common");
const paint_config_service_1 = require("./paint-config.service");
const paint_config_controller_1 = require("./paint-config.controller");
const mongoose_1 = require("@nestjs/mongoose");
const paint_config_schema_1 = require("./schemas/paint-config.schema");
let PaintConfigModule = class PaintConfigModule {
};
PaintConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: paint_config_schema_1.PaintConfig.name, schema: paint_config_schema_1.PaintConfigSchema },
            ]),
        ],
        controllers: [paint_config_controller_1.PaintConfigController],
        providers: [paint_config_service_1.PaintConfigService],
    })
], PaintConfigModule);
exports.PaintConfigModule = PaintConfigModule;
//# sourceMappingURL=paint-config.module.js.map