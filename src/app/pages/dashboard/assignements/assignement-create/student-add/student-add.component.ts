import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  inputForm:FormGroup;
  auteurData!:any;
  submitted:boolean = false;
  loadingSubmit:boolean = false;
  
  @Output() getResult: EventEmitter<Object> = new EventEmitter();
  @Input() loadingSave: BehaviorSubject<boolean>;

  loadingObservable!:Observable<boolean>;

  constructor(
    private formBuilder:FormBuilder,
    private auteurService:StudentService
  ) { }

  ngOnInit(): void {
    this.getAuteur();
    this.initForm();

    this.loadingObservable = this.loadingSave.asObservable();
  }

  initForm() {
    this.inputForm = this.formBuilder.group({
      auteurId: [
        '',
          Validators.required,
      ],
     
    });
  }
  
  getAuteur(){
    this.auteurService.getAuteur().pipe(first()).subscribe((data:any) => {
      this.auteurData = data?.data;
    })
  }

  openInsertEtudiant() {

  }

  submit(){
    this.submitted = true;
    if (!this.inputForm.valid) return;
    this.getResult.emit(this.inputForm.value);
  }

}
