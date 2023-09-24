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
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const form_schema_1 = require("./schemas/form.schema");
const mongoose_2 = require("mongoose");
let FormService = class FormService {
    constructor(FormModel) {
        this.FormModel = FormModel;
    }
    async create(createFormDto) {
        const createdForm = new this.FormModel(createFormDto);
        return createdForm.save();
    }
    async findAll() {
        return this.FormModel.find().exec();
    }
    findOne(id) {
        return this.FormModel.find({
            user: id,
        });
    }
    update(id, updateFormDto) {
        return this.FormModel.updateOne({
            _id: id,
        }, {
            $set: {
                name: updateFormDto.name,
                email: updateFormDto.email,
                birthDate: updateFormDto.birthDate,
                description: updateFormDto.description,
                cpf: updateFormDto.cpf,
                country: updateFormDto.country,
                state: updateFormDto.state,
                city: updateFormDto.city,
            },
        });
    }
    remove(id) {
        return this.FormModel.findOneAndRemove({
            _id: id,
        }).exec();
    }
};
FormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(form_schema_1.Form.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map