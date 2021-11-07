import { Controller, Get, Post, Param, Body, Query, Header } from '@nestjs/common';

@Controller('exam')
export class ExamController {
  @Get(':exam_id')
  getExam(@Param() params): string {
    console.log('joge');
    return '整数 a, b が標準入力で与えられます。a + b を出力してください。';
  }

  @Post()
  @Header('content-type', 'application/json; charset=UTF-8')
    async postAns(@Body() answer) {
    // this.answerService.checkAnswer();
    return answer
  }
}
