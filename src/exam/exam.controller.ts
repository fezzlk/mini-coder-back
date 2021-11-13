import { Controller, Get, Post, Param, Body, Query, Header } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}
  
  @Get(':exam_id')
  getExam(@Param() params): string {
    // '整数 a, b が標準入力で与えられます。a + b を出力してください。'
    return '文字列「True」を出力してください';
  }

  @Post()
  @Header('content-type', 'application/json; charset=UTF-8')
  async postAns(@Body() body) {
    const { answer } = body;
    const result = await this.examService.checkAnswer(answer);
    const isCorrect = result === 'True';
    return { answer, result, isCorrect };
  }
}
