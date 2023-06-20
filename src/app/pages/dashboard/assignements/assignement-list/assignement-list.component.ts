import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { AuthService } from 'src/app/modules/auth';
import { AssignementService } from 'src/app/services/assignement.service';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement-list.component.html',
  styleUrls: ['./assignement-list.component.scss']
})
export class AssignementListComponent implements OnInit {

  assignementData!:Array<any>
  role:string;
  loadingDeleteAssignement:boolean = false;

  inputFormRendu!:FormGroup;
  submittedRendu:boolean = false;
  loadingRendu:boolean = false;

  @ViewChild('updateAssignement') assignementUpdate:ElementRef;
  assignementUpdateRef:NgbModalRef;
  assignementSelected!:string;

  page:number = 1 ;
  totalPages:number = 1;

  loadingDataAssignement:boolean = false;

  constructor(
    private assignementService:AssignementService,
    private authService:AuthService,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAssignement();
    this.getRoleUser();
    this.initFormRendu();

  }

  initFormRendu(){
    this.inputFormRendu = this.formBuilder.group({
      note: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(20)
        ]),
      ],
      remarques:[
        '',
       Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120)
       ])
      ]
    });
  }

  getAssignement(){
    this.assignementService.getAssignements(this.page,6).pipe(first()).subscribe((data)=> {
      this.assignementData = data?.data;
      this.page = data?.page;
      this.totalPages = data?.totalPages;
    })
  } 

  incrementAssignement(){
    this.loadingDataAssignement = true;
    this.assignementService.getAssignements(this.page,6).pipe(first()).subscribe((data)=> {
      this.assignementData = [...this.assignementData,data?.data] ;
      this.page = data?.page;
      this.totalPages = data?.totalPages;
      this.loadingDataAssignement = true;

    })
  }

  getRoleUser(){
    const session = this.authService.getAuthFromLocalStorage();
    this.role = session?.data?.role;
  }

  toDetailsPage(idAssignement:string) {
    this.router.navigateByUrl(`/dashboard/assignement-details/${idAssignement}`);
  }

  openModalRendu(idAssignement:string){
    this.assignementSelected = idAssignement;
    this.assignementUpdateRef = this.modalService.open(this.assignementUpdate, { ariaLabelledBy: 'modal-basic-title',fullscreen:'md',size:'md' });
  }

  deleteAssignement(assignementId:string){
    this.loadingDeleteAssignement = true;
    this.assignementService.deleteAssignement(assignementId).pipe(first()).subscribe(()=>{
      this.getAssignement();
      this.loadingDeleteAssignement = false;
    })
  }

  rendreAssignement(){
    this.submittedRendu = true;
    
    if(!this.inputFormRendu.valid) return;
    this.loadingRendu = true;
    const body = {
      _id : this.assignementSelected,
      ...this.inputFormRendu.value,
      dateDeRendu:new Date(),
      rendu:true
    }

    this.assignementService.updateAssignement(body).pipe(first()).subscribe(() => {
      this.submittedRendu = false;
      this.loadingRendu = false;
      this.inputFormRendu.reset();
      this.assignementUpdateRef.close();
      this.getAssignement();
    });
  }

  loadMore(){
    this.page += 1;
    this.incrementAssignement();
  }

 

}
