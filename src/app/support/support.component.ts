import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  changeDocumentation: boolean;
  changeForm: boolean;
  changeContacts: boolean;
  constructor() {
    this.changeDocumentation = false;
    this.changeForm = false;
    this.changeContacts = false;

  }

  ngOnInit(): void {

  }

  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  getValues(formValue: object) {
    console.log(formValue);
    this.changeForm = false;
    //InsertToDB(formValue);
  }



  ViewOrSave() {
    if (confirm('Do you want to download the documntation?')) {
      // Save it!
      console.log('Download will happen');
      this.changeDocumentation = false;
    } else {
      // Do nothing!
      console.log('Displaying....');
      this.changeDocumentation = true;
    }
   // this.changeText = false;    
  }
}
