import { Module } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import { UserModule } from '../sub';

@Module({
  imports: [UserModule],
})
export class TestnetModule {
  public static Routes: Routes = [
    {
      path: 'users',
      module: UserModule,
    },
  ];
}
