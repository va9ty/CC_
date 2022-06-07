import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  constructor() { }

  //DUMMY : will be replaced by backend data from Spring!?
  responses = [
    {id: 1, name:'answer 1', description: 'answer 1 description'},
    {id: 2, name:'answer 2', description: 'answer 2 description'},
    {id: 3, name:'answer 3', description: 'answer 3 description'},
    {id: 4, name:'answer 4', description: 'answer 4 description'}
  ];

  ngOnInit(): void {
   
  }

}
