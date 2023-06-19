import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { InsertConfig } from 'src/app/interface/insert.interfaces';

@Component({
  selector: 'app-insert-dynamic',
  templateUrl: './insert-dynamic.component.html',
  styleUrls: ['./insert-dynamic.component.scss']
})
export class InsertDynamicComponent implements OnInit,OnDestroy {
  @Input() configuration:InsertConfig;
  @Input() selectData:{[key:string]:Array<{field:string,value:string}>} = {};
  @Input() loading:boolean = false;
  @Output() getResult   : EventEmitter<Object> = new EventEmitter();


  inputForm:FormGroup;
  submitted:boolean = false;

    
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.initForm();
  }

  displayLabel(field:string){
    if (this.configuration?.label && this.configuration?.label.hasOwnProperty(field)) {
      return this.configuration?.label[field];
    }
    return field;
  }

  getTypeInput(field:string){
    if (!this.configuration.type[field] ) return 'text'
    return this.configuration.type[field] || 'text';
  }

  initForm() {
    const constraintForm:{[key:string]:Array<any>} = {};
    this.configuration.field.forEach((item) => {
      const arrayConstraint:(ValidatorFn | null | undefined)[] = [];
      const control = this.configuration?.control[item] || '';
      const defaultValue = this.configuration?.defaultValue[item] || '';
      const arrayControl = control.split(',');
      arrayControl.forEach((controlItem)=>{
        const itemControl = this.controlAddHandle(controlItem);
        if (itemControl) arrayConstraint.push(itemControl);        
      });
      const validators = Validators.compose(arrayConstraint);
      constraintForm[item] = [(defaultValue || ''),validators]
    });
    this.inputForm = this.fb.group(constraintForm);
  }

  controlAddHandle(controlType:string){
    let result ;
    const controlKey = controlType.split(':');
    switch (controlKey[0]) {
      case "not-null":
        result = Validators.required;
        break;
      case "minLength":
        result = Validators.minLength(parseInt(controlKey[1]));
        break;
      case "maxLength":
        result = Validators.maxLength(parseInt(controlKey[1]));
        break;
      case "min":
        result = Validators.min(parseInt(controlKey[1]));
        break;
      case "max":
        result = Validators.max(parseInt(controlKey[1]));
        break;
    }
    return result;
  }

  getRequiredError(item:string){
    return `Le ${this.displayLabel(item)} est obligatoire!`;
  }

  getLengthError(item:string){
    return `La taille de ${this.displayLabel(item)} n'est pas respecter !`;
  }

  getMinMaxError(item:string){
    return `L'intervalle de ${this.displayLabel(item)} n'est pas respecter !`;
  }

  ctaAction(){
    this.submitted = true;
    if (this.inputForm.invalid) {
      return;
    };
    this.getResult.emit(this.inputForm.value);
    this.submitted = false;

  }

  changeFunction(item:string) {
    if (this.configuration.onChangeFunction && this.configuration.onChangeFunction[item]?.inputChange) {
      this.configuration.onChangeFunction[item].inputChange(this.inputForm);
    }
  }


}
