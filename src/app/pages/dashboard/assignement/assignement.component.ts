import { Component, OnInit } from '@angular/core';
import { AssignementService } from 'src/app/services/assignement.service';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.scss']
})
export class AssignementComponent implements OnInit {

  assignementData!:Array<any>

  constructor(
    private assignementService:AssignementService
  ) { }

  ngOnInit(): void {
  
  }

  getAssignement(){
    // this.assignementService.getAssignements()
  } 

}
