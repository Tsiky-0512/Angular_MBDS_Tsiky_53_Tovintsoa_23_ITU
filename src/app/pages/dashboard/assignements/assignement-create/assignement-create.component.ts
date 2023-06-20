import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, first } from 'rxjs';
import { AssignementService } from 'src/app/services/assignement.service';

@Component({
  selector: 'app-assignement-create',
  templateUrl: './assignement-create.component.html',
  styleUrls: ['./assignement-create.component.scss']
})
export class AssignementCreateComponent implements OnInit {
  data:any = {};
  step:number = 0;  

  loadingSave:BehaviorSubject<boolean>;


  constructor(
    private assignementService:AssignementService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.loadingSave = new BehaviorSubject(false);


  }

  getDataStepOne(event:any) {
    this.data.nom = event?.nom;
    this.data.matiereId = event?.matiereId;
    this.step = 1;    
  }

  getDataStepTwo(event:any){
    this.data.auteurId = event?.auteurId;
    this.saveAssignement();
  } 


  saveAssignement() {
    this.loadingSave.next(true);
    this.assignementService.saveAssignement(this.data).pipe(first()).subscribe(()=>{
      this.router.navigateByUrl('/dashboard/assignement-list');
      this.loadingSave.next(false);
    });
  }
}
