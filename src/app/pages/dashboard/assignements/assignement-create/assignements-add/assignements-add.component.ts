import { Component, ElementRef, EventEmitter, NgModuleRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-assignements-add',
  templateUrl: './assignements-add.component.html',
  styleUrls: ['./assignements-add.component.scss']
})
export class AssignementsAddComponent implements OnInit {
  submitted:boolean = false;
  inputForm:FormGroup;
  inputFormMatiere:FormGroup;
  submittedMatiere:boolean = false;
  matiereData!:Array<any>;
  previewImageMatiereUrl!:any;
  imageMatiereFile!:File;

  @ViewChild('insertMatiere') insertMatiere:ElementRef;
  insertMatiereRef:NgbModalRef;

  @Output() getResult: EventEmitter<Object> = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private matiereService:MatiereService,
    private modalService: NgbModal,
    private common:CommonService
  ) { }

  ngOnInit(): void {
    this.getListMatiere();
    this.initForm();
    this.initFormMatiere();
  }

  initForm() {
    this.inputForm = this.formBuilder.group({
      nom: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60)
        ]),
      ],
      matiereId: [
        '',
        Validators.required,
      ],
    });
  }

  initFormMatiere(){
    this.inputFormMatiere = this.formBuilder.group({
      nom: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60)
        ]),
      ],
      nom_prof:[
        '',
       Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
       ])
      ],
      image: ['',Validators.required],
      image_prof:['']
    });
    
  }
  
  


  getListMatiere(){
    this.matiereService.getMatiere().pipe(first()).subscribe((data:any) => {
      this.matiereData = data?.data;
    })
  }

  submit(){
    if(!this.inputForm.valid) return;
    const value = this.inputForm.value;
    this.getResult.emit(this.inputForm.value);
  }

  openInsertMatiere(){
    this.insertMatiereRef = this.modalService.open(this.insertMatiere, { ariaLabelledBy: 'modal-basic-title',fullscreen:'md',size:'md' });
  }

  onFileSelectedImageMatiere(event:any) {
    if (!event.target.files[0]) return;

    const file = event.target.files[0];

    const error =  this.checkImageFile(file);

    if (error) return;

    this.imageMatiereFile = file;
    
    // lecture du contenu du fichier
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImageMatiereUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }


  checkImageFile(file:File){
    if (!file || !file.type.match('image.*')) {
      this.common.openSnackBarMessage('Seuls les fichiers image sont autorisés.','error',3000);
      return true;
    }
    return false;
  }

}
