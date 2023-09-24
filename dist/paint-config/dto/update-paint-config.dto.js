"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaintConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_paint_config_dto_1 = require("./create-paint-config.dto");
class UpdatePaintConfigDto extends (0, swagger_1.PartialType)(create_paint_config_dto_1.CreatePaintConfigDto) {
}
exports.UpdatePaintConfigDto = UpdatePaintConfigDto;
//# sourceMappingURL=update-paint-config.dto.js.map