import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { coreConfig } from 'src/app/config/core.config';
import { Pagination } from 'src/app/interface/table.interfaces';


@Component({
  selector: 'app-pagination-widget1',
  templateUrl: './pagination.component.html',
  styleUrls:['./pagination.component.scss']
})
export class PaginationWidget1Component implements OnInit {
  @Input() totalPage:number = 0;
  @Input() startPage:number = 0;
  @Input() endPage :number = 0;
  @Input() numberPerPage:number = coreConfig?.table?.nbItemSelected;
  @Input() countData:BehaviorSubject<number>;

  @Output() paginationValue:EventEmitter<Pagination> = new EventEmitter<Pagination>();

  countDataOservable:Observable<number>;


  numPage:number = 1;
  perPageList:Array<number> = coreConfig?.table?.nbItemTable;
  
  constructor() {
  }

  ngOnInit(): void {
    this.countDataOservable = this.countData?.asObservable();
    this.countData?.subscribe((countData:number) => {    
      
      this.handleStartPage();
      this.handleEndPage(countData);
      this.handleTotalPage(countData);
    })
  }

  handleStartPage(){
    this.startPage = (this.numPage - 1) * parseInt(parseInt(this.numberPerPage.toString()).toString()) + 1; 
  }

  handleEndPage(countData:number){
    const endPageTemp = this.numPage * parseInt(this.numberPerPage.toString());
    this.endPage = endPageTemp > countData ? countData : endPageTemp ;
  }

  handleTotalPage(countData:number){
    this.totalPage = Math.ceil(countData / parseInt(this.numberPerPage.toString()));
  }

  nextPage(){
    this.numPage = this.numPage + 1 ;
    this.paginationValue.emit({ pageNumber:this.numPage , nbPerPage:parseInt(this.numberPerPage.toString()) });
  }

  previousPage(){
    this.numPage = this.numPage - 1 ;
    this.paginationValue.emit({ pageNumber:this.numPage , nbPerPage:parseInt(this.numberPerPage.toString()) });
  }

  toStartPage(){
    this.numPage = 1 ;
    this.paginationValue.emit({ pageNumber:this.numPage , nbPerPage:parseInt(this.numberPerPage.toString()) });
  }

  toEndPage(){
    this.numPage = this.totalPage ;
    this.paginationValue.emit({ pageNumber:this.numPage , nbPerPage:parseInt(this.numberPerPage.toString()) });
  }

  changePerPage(){
    this.paginationValue.emit({ pageNumber:this.numPage , nbPerPage:parseInt(this.numberPerPage.toString()) });
  }

}
