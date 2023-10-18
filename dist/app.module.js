"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const form_module_1 = require("./form/form.module");
const config_2 = require("@nestjs/config");
const robot_module_1 = require("./robot/robot.module");
const paint_config_module_1 = require("./paint-config/paint-config.module");
const users_module_1 = require("./users/users.module");
const configService = new config_1.ConfigService();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_2.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forRoot(configService.get('DATABASE_CONNECTION_STRING')),
            form_module_1.FormModule,
            robot_module_1.RobotModule,
            paint_config_module_1.PaintConfigModule,
            users_module_1.UsersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map