import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';

@Controller('exam')
export class ExamController {
  @Get(':exam_id')
  getExam(@Param() params): string {
    console.log(params.exam_id);
    return 'answer';
  }

  @Post()
  async postAns(@Body() answer) {
    console.log(answer);
    // this.answerService.checkAnswer();
    return 'Received your answer. Please wait...'
  }
}
