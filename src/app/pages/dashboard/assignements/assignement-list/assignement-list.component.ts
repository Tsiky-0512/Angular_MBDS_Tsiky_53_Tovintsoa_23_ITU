import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AssignementService } from 'src/app/services/assignement.service';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement-list.component.html',
  styleUrls: ['./assignement-list.component.scss']
})
export class AssignementListComponent implements OnInit {

  assignementData!:Array<any>

  constructor(
    private assignementService:AssignementService
  ) { }

  ngOnInit(): void {
    this.getAssignement();
  }

  getAssignement(){
    this.assignementService.getAssignements().pipe(first()).subscribe((data)=> {
      this.assignementData = data?.data;
    })
  } 

}
