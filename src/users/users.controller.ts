import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('findAllUsers')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('findOneUser/:userId')
  findOneUser(@Param('userId') userId: number) {
    return this.usersService.findOneUser(userId);
  }

  @Post('updateLastPaint')
  updateLastPaintByUser(
    @Body()
    updateLastPaintByUserDTO: {
      userId: number;
      lastPaintId: number;
    },
  ) {
    return this.usersService.updateLastPaintByUser(updateLastPaintByUserDTO);
  }
  // @Post(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
