import { Controller, Get, Post, Param, Body, Query, Header } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}
  
  @Get(':exam_id')
  getExam(@Param() params): string {
    let questionSet; // {q_id: question}
    switch (params.exam_id) {
      case '1':
        questionSet = [ // get from db
          { 'index': 1, 'id': '1', 'q': '文字列「True」を出力してください' },
          { 'index': 2, 'id': '2', 'q': '整数 a, b が標準入力で与えられます。a + b を出力してください。' },
          { 'index': 3, 'id': '3', 'q': '整数 a, b が標準入力で与えられます。a + b を出力してください。' },
          { 'index': 4, 'id': '4', 'q': '整数 a, b が標準入力で与えられます。a + b を出力してください。' },
          { 'index': 5, 'id': '5', 'q': '整数 a, b が標準入力で与えられます。a + b を出力してください。' },
        ]
    }
    return questionSet;
  }

  @Post()
  @Header('content-type', 'application/json; charset=UTF-8')
  async postAns(@Body() body) {
    const { answer, id } = body;
    const result = await this.examService.checkAnswer(answer);
    const correctAnswerList = { // get from db
      '1': 'True',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
    }
    const isCorrect = result === correctAnswerList[id];
    return { answer, result, isCorrect };
  }
}
