import { CreateRobotDto } from './create-robot.dto';
declare const UpdateRobotDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRobotDto>>;
export declare class UpdateRobotDto extends UpdateRobotDto_base {
    userName: string;
    isInACurrentWork: boolean;
    isTheFirstConection: boolean;
    ssidRobot: string;
    passwordRobot: string;
    LastPaintingIds: object;
}
export {};
