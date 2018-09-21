import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions = [
    'Completion of high value rocks',
    'Impact on My Team',
    'Virtues and Values',
    'Productivity and Measureable Results'
  ];
  workingQuestion = '';

  @ViewChild('mainContainer') mainContainer: ElementRef;

  addQuestion() {
    this.questions.push(this.workingQuestion);
    this.workingQuestion = '';
  }

  deleteQuestion(question) {
    this.questions = this.questions.filter(x => x !== question);
  }

  downloadPdf() {
    let html = this.mainContainer.nativeElement;
    let doc = new jsPDF();
    doc.fromHTML(html.innerHTML, 15, 15, {
      'elementHandlers': (e) => console.log(e)
    })

    //doc.text('Snargle', 10, 10);
    doc.save('test.pdf');
  }
}
