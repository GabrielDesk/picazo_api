import { PartialType } from '@nestjs/mapped-types';
import { CreateRobotDto } from './create-robot.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsString } from 'class-validator';

export class UpdateRobotDto extends PartialType(CreateRobotDto) {
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'Validação do estado de serviço do robô.',
    example: 'true',
  })
  @IsBoolean()
  isInACurrentWork: boolean;

  @ApiProperty({
    description: 'Validação do estado de conexão do robô.',
    example: 'false',
  })
  @IsBoolean()
  isTheFirstConection: boolean;

  @ApiProperty({
    description: 'Nome da rede que o robô está conectando.',
    example: 'admin',
  })
  @IsString()
  ssidRobot: string;

  @ApiProperty({
    description: 'Senha da rede que o robô está conectando.',
    example: 'admin123',
  })
  @IsString()
  passwordRobot: string;

  @ApiProperty({
    description: 'Histórico de pinturas do robô.',
    example: '{3, 2, 6}',
  })
  @IsObject()
  LastPaintingIds: object;
}
