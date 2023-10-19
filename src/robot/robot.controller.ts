import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { RobotService } from './robot.service';
import { CreateRobotDto } from './dto/create-robot.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('robot')
@Controller('robot')
export class RobotController {
  constructor(private readonly robotService: RobotService) {}

  @Post()
  @ApiOperation({
    description: 'Método que cadastra o form criado pelo usuário.',
  })
  create(@Body() createRobotDto: CreateRobotDto) {
    return this.robotService.create(createRobotDto);
  }

  @Get()
  @ApiOperation({
    description: 'Método que busca todos os forms do Database.',
  })
  findAllRobotsRegistered() {
    return this.robotService.findAllRobotsRegistered();
  }

  @Get('findOneRobot/:id')
  @ApiOperation({
    description:
      'Método que busca todos os forms do usuário. O parâmetro Id refere-se ao id do usuário firebase.',
  })
  findOneRobot(@Param('id') id: string) {
    return this.robotService.findOneRobot(+id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Método que atualiza o form.',
  })
  @ApiBody({
    type: CreateRobotDto,
    examples: {
      a: {
        summary: 'Update body',
        description:
          'Dados utilizados para atualização do form. A variável Id refere-se ao id form',
        value: {
          userName: 'Ronaldo Fenômeno',
          userEmail: 'JamesMcAvoy@hotmail.com',
        } as CreateRobotDto,
      },
    },
  })
  updateRobotOwnerInfo(
    @Param('id') id: string,
    @Body()
    updateRobotOwnerInfoDto: { userName: string; userEmail: string },
  ) {
    return this.robotService.updateRobotOwnerInfo(+id, updateRobotOwnerInfoDto);
  }

  @Patch(':id')
  updateRobotInternet(
    @Param('id') id: string,
    @Body()
    updateRobotInternetDto: { ssidRobot: string; passwordRobot: string },
  ) {
    return this.robotService.updateRobotInternet(+id, updateRobotInternetDto);
  }

  @Patch(':id')
  updateRobotPaintState(
    @Param('id') id: string,
    @Body()
    updateRobotStateDto: {
      isInACurrentWork: boolean;
      isTheFirstConection: boolean;
    },
  ) {
    return this.robotService.updateRobotPaintState(+id, updateRobotStateDto);
  }

  @Patch(':id')
  disactiveRobot(@Param('id') id: string) {
    return this.robotService.disactiveRobot(+id);
  }

  @Post('updateLastPaint')
  updateLastPaintByRobot(
    @Body()
    updateLastPaintByRobotDTO: {
      robotId: number;
      lastPaintId: number;
    },
  ) {
    return this.robotService.updateLastPaintByRobot(updateLastPaintByRobotDTO);
  }
}
