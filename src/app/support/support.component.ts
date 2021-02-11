import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';


const dbUrl = "mongodb://localhost:2701/"


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
/*
async connect() { // add async
  console.log('connecting to mongo');

  try {
    if (!this.client) { // I added this extra check
      console.log('setting client');
      this.client = await MongoClient.connect(dbUrl, { useNewUrlParser: true })
      console.log(this.client);
    }
  } catch(error) {
    console.log('error during connecting to mongo: ');
    console.error(error);
  }
}
}
/*
MongoClient.connect(dbUrl, { useUnifiedTopology: true }, async (err, database) => {
    if (err) throw err;
    conn = await database;
  });

  async InsertToDB(userData) {

    let dbo = conn.db("demoAppDB");
    let myobj = userData ;
    let coll = await dbo.collection("supportForms").insertOne(myobj);
    //console.log(coll);
    if (coll.insertedCount) {
      console.log("inserted succesfully");
    }
}

}
*/