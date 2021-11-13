import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

@Injectable()
export class ExamService {
  async checkAnswer(answer: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const fs = require('fs');

      fs.writeFile('tmp/submitted_script.py', `print(${answer})`, function (err) {
          if (err) { throw err; }
          console.log('create "submitted_script.py"');
      });
      let pyshell = new PythonShell('tmp/submitted_script.py');

      // sends a message to the Python script via stdin
      pyshell.send('hello');
      
      pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        resolve(message);
      });
      
      // end the input stream and allow the process to exit
      pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
      });
    })
  }
}
