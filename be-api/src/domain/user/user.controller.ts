import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiOperationDecorator } from 'src/common/decorator/api-operation.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserReq } from 'src/common/decorator/user.decorator';
import { Public } from 'src/common/decorator/public.decorator';
import { User } from '@prisma/client';
@ApiTags('User')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @ApiOperationDecorator({
    summary: 'Create a new user',
    description: 'Create a new user',
  })
  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }

  @ApiOperationDecorator({
    summary: 'Get all users success',
    description: 'Get all users',
  })
  @Get('/all-users')
  allUsers() {
    return this.userService.findMany();
  }

  @Get('/me')
  getMe(@UserReq() user: User) {
    return user;
  }
}
