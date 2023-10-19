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
import { HydratedDocument } from 'mongoose';
export type RobotDocument = HydratedDocument<Robot>;
export declare class Robot {
    robotId: number;
    userId: number;
    userName: string;
    robotName: string;
    firstLog: string;
    isInACurrentWork: boolean;
    isTheFirstConection: boolean;
    ssidRobot: string;
    passwordRobot: string;
    LastPaintingIds: [];
    lastPaintId: number;
}
export declare const RobotSchema: import("mongoose").Schema<Robot, import("mongoose").Model<Robot, any, any, any, import("mongoose").Document<unknown, any, Robot> & Omit<Robot & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Robot, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Robot>> & Omit<import("mongoose").FlatRecord<Robot> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
