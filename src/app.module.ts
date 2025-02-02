import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import AppConfig from './common/config/app.config';
import UserModule from './User/user.module';
import { MorganMiddleware } from './Common/middleware/morgan-middleware';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [AppConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
