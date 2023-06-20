import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement-create',
  templateUrl: './assignement-create.component.html',
  styleUrls: ['./assignement-create.component.scss']
})
export class AssignementCreateComponent implements OnInit {

  step:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
