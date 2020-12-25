import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Request,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  findOne(@Query('email') id: string) {
    return this.userService.findOne(id);
  }

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @Post('/signin')
  create(@Body() payload: CreateUserDto): Promise<String> {
    return this.userService.create(payload);
  }
}
