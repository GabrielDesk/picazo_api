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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PaintConfigService } from './paint-config.service';
import { CreatePaintConfigDto } from './dto/create-paint-config.dto';
export declare class PaintConfigController {
    private readonly paintConfigService;
    constructor(paintConfigService: PaintConfigService);
    createPaintConfig(createPaintConfigDto: CreatePaintConfigDto): Promise<import("./schemas/paint-config.schema").PaintConfig>;
    updateStatePaintConfig(updatePaintConfigDto: {
        id: number;
        paintState: boolean;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAllPaints(): Promise<import("./schemas/paint-config.schema").PaintConfig[]>;
    findOnePaintConfig(id: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    removePaintConfig(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/paint-config.schema").PaintConfig> & Omit<import("./schemas/paint-config.schema").PaintConfig & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
