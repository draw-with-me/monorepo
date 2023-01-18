import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
