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
import { CreateRobotDto } from './dto/create-robot.dto';
import { Robot, RobotDocument } from './schemas/robot.schema';
import { Model } from 'mongoose';
export declare class RobotService {
    private RobotModel;
    constructor(RobotModel: Model<RobotDocument>);
    create(createRobotDto: CreateRobotDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    findAllRobotsRegistered(): Promise<Robot[]>;
    findOneRobot(id: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    startRobotPaint(id: number, LastPaintingId: number): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotOwnerInfo(id: number, updateRobotOwnerInfoDto: {
        userName: string;
        userEmail: string;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotInternet(id: number, updateRobotInternetDto: {
        ssidRobot: string;
        passwordRobot: string;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotPaintState(id: number, updateRobotStateDto: {
        isInACurrentWork: boolean;
        isTheFirstConection: boolean;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    disactiveRobot(id: number): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateLastPaintByRobot(updateLastPaintByUser: {
        robotId: number;
        lastPaintId: number;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, Robot> & Omit<Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
