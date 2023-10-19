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
import { RobotService } from './robot.service';
import { CreateRobotDto } from './dto/create-robot.dto';
export declare class RobotController {
    private readonly robotService;
    constructor(robotService: RobotService);
    create(createRobotDto: CreateRobotDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    findAllRobotsRegistered(): Promise<import("./schemas/robot.schema").Robot[]>;
    findOneRobot(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotOwnerInfo(id: string, updateRobotOwnerInfoDto: {
        userName: string;
        userEmail: string;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotInternet(id: string, updateRobotInternetDto: {
        ssidRobot: string;
        passwordRobot: string;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateRobotPaintState(id: string, updateRobotStateDto: {
        isInACurrentWork: boolean;
        isTheFirstConection: boolean;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    disactiveRobot(id: string): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateLastPaintByRobot(updateLastPaintByRobotDTO: {
        robotId: number;
        lastPaintId: number;
    }): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, {}, import("mongoose").Document<unknown, {}, import("./schemas/robot.schema").Robot> & Omit<import("./schemas/robot.schema").Robot & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
