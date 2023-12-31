/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreatePaintConfigDto } from './dto/create-paint-config.dto';
import { PaintConfig, PaintConfigDocument } from './schemas/paint-config.schema';
import { Model } from 'mongoose';
export declare class PaintConfigService {
    private PaintConfigModel;
    constructor(PaintConfigModel: Model<PaintConfigDocument>);
    createPaintConfig(createPaintConfigDto: CreatePaintConfigDto): Promise<PaintConfig>;
    findAllPaints(): Promise<PaintConfig[]>;
    findOnePaintConfig(id: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateStatePaintConfig(updatePaintConfigDto: {
        id: number;
        paintState: boolean;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updatePercentPaintConfig(updatePercentPaintConfigDto: {
        id: number;
        percentStatus: number;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateProgressPaintConfig(updateProgressPaintConfigDto: {
        id: number;
        isAProgressPaint: boolean;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findLastPaintByUserId(userId: number): Promise<PaintConfig | null>;
    removePaintConfig(id: number): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, PaintConfig> & Omit<PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
