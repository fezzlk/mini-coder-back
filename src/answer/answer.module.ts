import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { CorsMiddleware } from '../middlewares/cors';

@Module({
  imports: [],
  controllers: [AnswerController],
  providers: [AnswerService],
})

export class AnswerModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}