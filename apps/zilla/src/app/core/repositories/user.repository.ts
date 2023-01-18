import { Injectable } from '@nestjs/common';
import { IRepository } from '../../database/core/interfaces/repository.interface';
import { prismaClient } from '../../database/clients';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository implements IRepository {
  getClient(): Prisma.UserDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  > {
    return prismaClient.user;
  }

  findAll(): Promise<User[]> {
    return this.getClient().findMany();
  }
}
