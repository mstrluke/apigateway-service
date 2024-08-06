import { Module } from '@nestjs/common';
import { GatewayController } from './app.controller';

@Module({
  controllers: [GatewayController],
})
export class AppModule {}
