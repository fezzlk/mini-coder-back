import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  getHello(): string {
    return 'answer';
  }

  @Post()
  async postAns(@Body() answer) {
    console.log(answer);
    // this.answerService.checkAnswer();
    return 'Received your answer. Please wait...'
  }
}
