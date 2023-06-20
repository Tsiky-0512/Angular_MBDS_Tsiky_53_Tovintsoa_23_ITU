import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { AssignementService } from 'src/app/services/assignement.service';

@Component({
  selector: 'app-assignement-details',
  templateUrl: './assignement-details.component.html',
  styleUrls: ['./assignement-details.component.scss']
})
export class AssignementDetailsComponent implements OnInit {
  assignementId!:string;
  assignementData!:any;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private assignementService:AssignementService
  ) {
    this.assignementId = this.route.snapshot.params.id;
    console.log("this.assignementId ===>",this.assignementId);
    
  }

  ngOnInit(): void {
    this.getDetatilsAssignement();
  }

  back() {
    this.router.navigateByUrl('/dashboard/assignement-list')
  }

  getDetatilsAssignement(){
    this.assignementService.getAssignementsById(this.assignementId).pipe(first()).subscribe((data:any) => {
      this.assignementData = data?.data;
    })
  }

}
