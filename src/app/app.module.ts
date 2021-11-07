import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorsMiddleware } from '../middlewares/cors';
import { ConfigModule } from '@nestjs/config';
import { ExamController } from 'src/exam/exam.controller';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env.development',
  })],
  controllers: [AppController, ExamController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}