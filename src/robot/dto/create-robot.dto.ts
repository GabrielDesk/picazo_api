import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class CreateRobotDto {
  @ApiProperty({ description: 'Id do robô.', example: '1' })
  @IsNumber()
  robotId: number;

  @ApiProperty({
    description: 'Id do usuário.',
    example: '1',
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'James McAvoy',
  })
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'Email do usuário.',
    example: 'JamesMcAvoy@hotmail.com',
  })
  @IsEmail()
  userEmail: string;

  @ApiProperty({
    description: 'Nome do robô.',
    example: 'PICAZO0H56.',
  })
  @IsString()
  robotName: string;

  @ApiProperty({
    description: 'Data do primeiro funcionamento.',
    example: '04/01/2023 - 10:15:30',
  })
  @IsString()
  firstLog: string;

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

  @ApiProperty({
    description: 'Validação do estado de ativação do robô.',
    example: 'true',
  })
  @IsBoolean()
  isActiveRobot: boolean;
}
