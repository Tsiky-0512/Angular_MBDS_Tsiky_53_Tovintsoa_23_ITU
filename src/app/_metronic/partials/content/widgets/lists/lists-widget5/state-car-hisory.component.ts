import { Component, Input, OnInit } from '@angular/core';
import { DateState } from 'src/app/interface/state.interfaces';

@Component({
  selector: 'app-state-car-hisory',
  templateUrl: './state-car-hisory.component.html',
  styleUrls: ['./state-car-history.component.scss']
})
export class StateCarHistory implements OnInit {
  @Input() ctaFunction:Function;
  @Input() stateHistory:DateState;

  
  constructor() {
  }

  ngOnInit(): void {

  }

  replaceTWithSpace(dateString:string) {
    return dateString.replace("T", " ");
  }
  




}
