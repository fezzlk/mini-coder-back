import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(query: any): string;
    getExam(params: any): string;
    postAns(answer: any): Promise<string>;
}
