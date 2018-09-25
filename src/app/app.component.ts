import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = { companyName: '', managerName: '', reportName: '', positionTitle: '', reviewDate: '' };
  questions = [
    'Completion of high value rocks',
    'Impact on My Team',
    'Virtues and Values',
    'Productivity and Measureable Results'
  ];
  workingQuestion = '';

  constructor(private httpService: HttpService) { }

  addQuestion() {
    this.questions.push(this.workingQuestion);
    this.workingQuestion = '';
  }

  deleteQuestion(question) {
    this.questions = this.questions.filter(x => x !== question);
  }

  downloadPdf() {
    this.httpService.postFormRequest({header: this.header, questions: this.questions});
  }
}
