import { Controller, Post, Body } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';

@Controller('api')
export class GatewayController {
  @Client({
    transport: Transport.NATS,
    options: { servers: ['nats://localhost:4222'] },
  })
  private client: ClientProxy;

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.client.send('register_user', body).toPromise();
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.client.send('login_user', body).toPromise();
  }

  @Post('logout')
  async logout(@Body() body: { userId: string }) {
    return this.client.send('logout_user', body).toPromise();
  }
}
