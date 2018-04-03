import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';



@Injectable()
export class SavevalueProvider {
  
  //elem1: string; 
  val: object;
 

  
  
  constructor(public http: HttpClient, 
    private spinnerDialog: SpinnerDialog
  ) {



  }
  

  savebody(elem,elem1){
  const donnee = {value: elem, part: elem1};
  const url = 'http://bmyscouter.co/db/mobile/test2.php';

  console.log(donnee);
  this.http
  .post(url, donnee, {responseType: 'text'})
  .subscribe(
    (val) => {
      console.log("POST call successful value returned in body", 
                  val);
                             
  },
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});


}


getbody(page) : any {
  this.spinnerDialog.show();
  
  
  this.http.get('http://bmyscouter.co/db/mobile/test.php').subscribe(
    data => {
      
     page.values = data;
     this.spinnerDialog.hide();
     console.log(page.values);
     page.show = true;
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        this.spinnerDialog.hide();
        console.log('An error occurred:', err.error.message);
      } else {
        this.spinnerDialog.hide()
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    }
); 

}

getval(page, elem) : any {
  var i;
  const length = elem.length;
  const donnee = elem;
  var user_height ;
  const url = 'http://bmyscouter.co/db/mobile/test3.php';

  this.http
  .post(url, donnee,
    // {responseType: 'text'}
  )
  .subscribe(
    (val) => {
      page.values = val;    
      //page.user_height = 13;
    },

  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});
}

getsettings(page, elem) : any {
  const length = elem.length;
  const donnee = elem;
  const url = 'http://bmyscouter.co/db/mobile/test3.php';

  this.http
  .post(url, donnee,
    // {responseType: 'text'}
  )
  .subscribe(
    (val) => {
      page.values = val;    
      console.log(page.values);
      page.user_first = val[0].user_first;
      page.user_last = val[1].user_last;
      page.myPhone = val[2].user_phone;
      page.myMail = val[3].user_email;
      page.myUnity = val[4].user_unity;
      page.myDate = val[5].user_birthday;
    },

  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
});
}


}
