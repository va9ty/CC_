import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map , first } from 'rxjs/operators';


/*import { AWSError, CognitoIdentityCredentials } from "aws-sdk";

var apigClientFactory = require('aws-api-gateway-client').default;
var config = {invokeUrl:'https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/answers'}
var apigClient = apigClientFactory.newClient(config);
*/

 




@Component({
  selector: 'app-overflow-form',
  templateUrl: './overflow-form.component.html',
  styleUrls: ['./overflow-form.component.css']
})

export class OverflowFormComponent implements OnInit {
  public data; 
  postId: any;
  errorMessage: any;

  constructor(private httpClient: HttpClient) { 
   } 

  ngOnInit(): void {
  }

  onSubmit():void{
    
  }
  callGetAPI():void{
    var ans_obj = <HTMLInputElement>document.getElementById("answers");
    this.httpClient.get("https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/answers").pipe(first()).subscribe(result=> {this.data = result; ans_obj.value=JSON.stringify(this.data.body); console.log(this.data)});
    

  
  }

  callPostAPI():void{
    {
      this.httpClient.post<any>('https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/questions', { title: ' POST Request Example' }).subscribe({
          next: data => {
              this.postId = data;
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
      })
  }
}
}


