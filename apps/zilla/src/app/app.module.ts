import { Module } from '@nestjs/common';
import { TestnetModule } from './core/modules/core';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TestnetModule,
    RouterModule.register([
      {
        path: 'testnet',
        module: TestnetModule,
        children: [...TestnetModule.Routes],
      },
    ]),
  ],
})
export class AppModule {}
