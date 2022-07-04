import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { map , first } from 'rxjs/operators';
import { PinpointSMSVoiceV2 } from 'aws-sdk';


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
    var post1 = <HTMLElement>document.getElementById("post1");
    var post2 = <HTMLElement>document.getElementById("post2");
    var post3 = <HTMLTextAreaElement>document.getElementById("post3");

    var search = <HTMLTextAreaElement>document.getElementById("search-posts");

    let params = new HttpParams().set('tags', ans_obj.value)
    //this.httpClient.get("https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/answers").pipe(first()).subscribe(result=> {this.data = result; ans_obj.value=JSON.stringify(this.data.body); console.log(this.data)});
    this.httpClient.get("https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/answers", {params: params}).pipe(first()).subscribe(result=> {
      this.data = result; 
      var body = this.data.body;
      var a = JSON.parse(body);
      var posts_array = JSON.parse(a).posts;
      console.log(posts_array);
      post1.innerHTML = posts_array[0];
      post2.innerHTML = posts_array[1];
      post3.innerHTML = posts_array[2];
      search.style.display = "inline-block";
    });
      

    

  
  }

  callPostAPI():void{
    {
      
      const httpOptions = { headers:new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', '*').set('Access-Control-Allow-Headers','*'), observe:'response' as 'response'};
      var question = <HTMLInputElement>document.getElementById("question");
      var qtext=question.value; 
      this.httpClient.post<any>('https://4qtavkb1kh.execute-api.us-east-1.amazonaws.com/Stage1/questions', { questions : qtext }, httpOptions ).subscribe({
        next: data => {
            this.postId = data;
            console.log("post id", this.postId);
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })

  }
}
}


