import { Component, Input, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../modal.config';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { first, Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-insert-model',
  styleUrls:['insert-model.component.scss'],
  templateUrl: './insert-model.component.html',
})
export class InsertModelComponent implements OnDestroy {
  @ViewChild('insertModel') private modalContent: TemplateRef<InsertModelComponent>;
  private modalRef: NgbModalRef;
  inputForm:FormGroup;
  submitted:boolean;
  loading$:Observable<boolean>;
  insertedModel$:Observable<boolean>;
  @Input() brandList?:Array<any>;
  @Input() brandNameByDefault?:string = '';

  private subscription:Subscription[] = [];

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private modalHttpService:ModalService,
    private common:CommonService
  ) {
    this.loading$ = this.modalHttpService.isLoading$;
    this.insertedModel$ = this.modalHttpService.insertedModel$;
    this.initForm();
    this.insertedBrandListener();

  }
  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }

  open(): Promise<boolean> {
    this.updateBrandNameSelected();
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent);
      this.modalRef.result.then(resolve, resolve);
    });
  }


  updateBrandNameSelected(){
    this.inputForm.patchValue({
      brandName : this.brandNameByDefault
    })
  }

  async close(): Promise<void> {
    this.modalRef?.close();
  }

  async dismiss(): Promise<void> {
    this.modalRef.dismiss();
  }

  initForm() {
    this.inputForm = this.fb.group({
      brandName: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      model:[
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  insertedBrandListener(){
    const subscribtion = this.insertedModel$.subscribe(()=>{
      this.close();
    })
    this.subscription.push(subscribtion);
  }

  onSubmit(){
    this.submitted = true;
    if (!this.inputForm.valid) return;
    console.log("this.inputForm.value ====>",this.inputForm.value);
    const valueForm = this.inputForm.value;
    const body = {
      model: valueForm?.model,
      brand: {
          brandName: valueForm?.brandName
      } 
    }
    this.modalHttpService.saveModel(body);
  }

  toCamelCase(str:string){
    return this.common.toCamelCase(str);
  }

  
}
