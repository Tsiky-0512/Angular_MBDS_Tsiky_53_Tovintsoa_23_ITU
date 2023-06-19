import { Component, Input, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../modal.config';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { first, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-insert-brand',
  templateUrl: './insert-brand.component.html',
})
export class InsertBrandComponent implements OnDestroy {
  @ViewChild('insertBrand') private modalContent: TemplateRef<InsertBrandComponent>;
  private modalRef: NgbModalRef;
  inputForm:FormGroup;
  submitted:boolean;
  loading$:Observable<boolean>;
  insertedBrand$:Observable<boolean>;
  private subscription:Subscription[] = [];


  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private modalHttpService:ModalService  
  ) {
    this.loading$ = this.modalHttpService.isLoading$;
    this.insertedBrand$ = this.modalHttpService.insertedBrand$;
    this.initForm();
    this.insertedBrandListener();
  }
  
  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }

  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent);
      this.modalRef.result.then(resolve, resolve);
    });
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
      ]
    });
  }

  insertedBrandListener(){
    const sbr = this.insertedBrand$.subscribe(()=>{
      this.close();
    });
    this.subscription.push(sbr);
  }

  onSubmit(){
    this.submitted = true;
    if (!this.inputForm.valid) return;
    this.modalHttpService.saveBrand(this.inputForm.value);
  }
  
}
