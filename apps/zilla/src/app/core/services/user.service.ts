import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
