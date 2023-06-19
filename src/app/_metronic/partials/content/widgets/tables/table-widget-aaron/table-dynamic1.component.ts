import { Component, Input, OnDestroy, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Configuration, Pagination } from 'src/app/interface/table.interfaces';

@Component({
    selector: 'app-table-dynamic1',
    templateUrl: './table-dynamic1.component.html',
    styleUrls: ['./table-dynamic1.component.scss']
})
export class TablesDynamic1Component implements OnInit,OnDestroy {
    @Input() configuration: Configuration;
    @Input() dataSubject: { [key: string]: BehaviorSubject<Array<any>> };
    @Input() loadingSubject : { [key: string]: BehaviorSubject<boolean> } = {};
    @Input() countData : { [key: string]: BehaviorSubject<number> } = {};
    @Input() clearFilterIconHandle: { [key: string]: BehaviorSubject<boolean> } = {};
    @Input() clearFilterFunction : { [key: string]: Function } = {};;

    @Output() selectionValueOutput = new EventEmitter<any>();
    @Output() filterValueOutput = new EventEmitter<any>();
    @Output() paginationValueOutput = new EventEmitter<any>();
    @Output() sortValueOutput = new EventEmitter<any>();
    @Output() advancedResearchButton = new EventEmitter<any>();


    header: { [key: string]: Array<any> } = {};
    sectionList: string[] = [];
    activeTab: string;
    activeSection: string;


    sortClass:{[key:string]:{[key:string]:string}} = {};
    filter:{[key:string]:{[key:string]:string}} = {};
    sortValue:{[key:string]:Array<any>} = {};

    
    selectionValue:{[key:string]:Array<any>} = {};
    deselectionValue:{[key:string]:Array<any>} = {};
    selectedStatus:{[key:string]:boolean} = {};
    linkValue:{[key:string]:{[key:string]:string}} = {}

    dataObservable : {[key:string]:Observable<Array<any>>} = {};
    loadingObservable : {[key:string]:Observable<boolean>} = {};
    clearFilterIcon : {[key:string]:Observable<boolean>} = {};

    subscription:Subscription[] = [];


    constructor(private router: Router) { }

    ngOnInit(): void {
        this.generateListSection();
        this.generateHeader();
        this.selectedTabByDefault();
        this.initTableSelection();
        this.initFilterModel();
        this.initDataUpdate();
        this.initLoadingUpdate();
        this.initSortUpdate();
        this.initLink();
        this.initClearIconHandle();
    }

    ngOnDestroy(): void {
        this.subscription.forEach((sb)=> sb.unsubscribe());
    }

    generateHeader() {
        this.sectionList.forEach(keys => {
            const header = this.configuration[keys].header;
            const label = this.configuration[keys].label;
            const result = [];
            for (const field of header) {
                if (label.hasOwnProperty(field)) {
                    result.push(label[field]);
                    continue;
                }
                result.push(field);
            }
            this.header[keys] = result;
        });
    }

    generateHeaderPerItem(section:string,head:string) {
        if (this.configuration[section].label.hasOwnProperty(head)) {
            return this.configuration[section].label[head];
        }
        return head;
    }

    initDataUpdate(){
        this.sectionList.forEach((section)=> {
            if (this.dataSubject[section]) this.dataObservable[section] = this.dataSubject[section].asObservable();
        });
    }

    initLoadingUpdate(){
        this.sectionList.forEach((section)=> {
            if (this.loadingSubject[section]) this.loadingObservable[section] = this.loadingSubject[section].asObservable();
        })
    }

    
    initClearIconHandle(){
        this.sectionList.forEach((section)=> {
            if (this.clearFilterIconHandle[section]) this.clearFilterIcon[section] = this.clearFilterIconHandle[section].asObservable();
        })
    }


    initSortUpdate(){
        this.sectionList.forEach((section)=> {
            if (this.configuration[section]?.sort) {
                this.sortClass[section] = {};
                this.sortValue[section] = [];
            }
        })
    }

    initLink(){
        this.sectionList.forEach((section)=> {
            if (this.configuration[section]?.link) {7
                this.linkValue[section] = {}
                Object.assign(this.linkValue[section],this.configuration[section]?.link);
            }
        })
    }

    ifLinkExist(section:string,field:string){
        const link = this.linkValue[section][field];
        if(!link) return false
        return true;
    }

    generateLink(section:string,head:string,item:any){
        let link = this.linkValue[section][head];
        const regex = /\[(.*?)\]/g;
        const matches = link.match(regex) || [];
        

        matches.forEach((itemMatch)=> {
            const valueTraited = itemMatch.substring(1, itemMatch.length - 1);;
            const value = this.convertFielToDisplay(item,valueTraited,section);
            link = link.replace(/\[.*?\]/, value);            
        })
        this.router.navigateByUrl(link);
    }

    initFilterModel(){
        this.sectionList.forEach((section)=> {
            if(!this.configuration[section]?.filter) return ;
            this.filter[section] = {};
            const header = this.configuration[section].header;
            header.forEach((item)=> {
                this.filter[section][item] = "";
            })
        });
    }

    convertFielToDisplay(item: any, field: string,section: string) {
        const fields = field.split('.');

        let result = item ? item : "";
        for (let i = 0; i < fields.length; i++) {
            const temp = result;

            if (temp[fields[i]] == null || temp[fields[i]] == undefined) {
                result = "--";
                break;
            };
            result = typeof temp[fields[i]] === "number" ? this.addThousandSeparator(temp[fields[i]]) : temp[fields[i]];
            if ( i == fields.length - 1) {
                result = this.isDateValue(field,section) ? this.addDateSeparator(temp[fields[i]]) : temp[fields[i]];
                result = this.haveEnumValue(temp[fields[i]],field,section);
            }
        }
        result = (result == null || result == undefined) ? "--" : result;
        return result;
    }

    isDateValue(field:string,section: string){
        if ( this.configuration[section].typeData[field] && this.configuration[section].typeData[field] === "date" ) {
            return true;
        }
        return false;
    }

    haveEnumValue(value:string,field:string,section:string){
        if ( this.configuration[section].enumValue[field] && this.configuration[section].enumValue[field][value]) {
            return  this.configuration[section].enumValue[field][value];
        }
        return value;
    }

    generateListSection() {
        this.sectionList = Object.keys(this.configuration);
    }

    setTab(tab: string, section: string) {
        this.activeTab = tab;
        this.activeSection = section;
    }

    activeClass(tab: string) {
        return tab === this.activeTab ? 'show active' : '';
    }

    selectedTabByDefault() {
        this.activeTab = this.configuration[this.sectionList[0]].identifiants;
        this.activeSection = this.sectionList[0];
    }

    isNumber(field: string, section: string) {
        const typeData = this.configuration[section].typeData as any;
        if (typeData?.hasOwnProperty(field)) {
            return typeData[field] === "number";
        }
        return false;
    }


    addThousandSeparator(number: number) {
        let numStr = number.toString();

        let decimalIndex = numStr.indexOf('.');
        decimalIndex = decimalIndex === -1 ? numStr.length : decimalIndex;

        for (let i = decimalIndex - 3; i > 0; i -= 3) {
            numStr = numStr.slice(0, i) + ' ' + numStr.slice(i);
        }

        return numStr;
    }

    addDateSeparator(value: string){
        return value.replace('T',' ');
    }

    sortColumn(section:string,id:string) {
        let field = id;
        let value = 0;
        let index = this.sortValue[section].map(e => e.field).indexOf(id);
        if (index > -1) this.sortValue[section].splice(index, 1);
        switch (this.sortClass[section][id]) {
            case undefined:
                this.sortClass[section][id] = "arrows-container-asc";
                value = 1;
                break;
            case "":
                this.sortClass[section][id] = "arrows-container-asc";
                value = 1;
                break;
            case "arrows-container-asc":
                this.sortClass[section][id] = "arrows-container-desc";
                value = -1;
                break;
            case "arrows-container-desc":
                this.sortClass[section][id] = "";
                let index = this.sortValue[section].map(e => e.field).indexOf(id);
                if (index > -1) this.sortValue[section].splice(index, 1);
                break;
        }

        if (value != 0){
            this.sortValue[section].push({ field, value });
            const body = {section:section,...this.sortValue};
            this.sortValueOutput.emit(body);            
        }
    }

    handleSelectedAllData(section:string) {
        this.selectedStatus[section] = this.selectedStatus[section]  ? false : true;
        const subscr = this.dataObservable[section].subscribe((dataItem:Array<any>)=>{
            dataItem.forEach((item)=>{
                item.selected = this.selectedStatus[section]
            })
        });

        this.selectionValue[section] = [];
        this.deselectionValue[section] = [];
        this.emitSelectionValue(section);
        this.subscription.push(subscr);
    }

    initTableSelection(){
        this.sectionList.forEach((section)=> {
            if (!this.configuration[section]?.withSelection) return;
            this.selectionValue[section] = [];
            this.deselectionValue[section] = [];
        });
    }

    addItemSelected(item:any,section:string,value:boolean) {
        item.selected = value;
        if (this.selectedStatus[section] && value == false) {
          const index = this.deselectionValue[section].indexOf(item[this.configuration[section].selectionReference]);
          if (index > -1) this.deselectionValue[section].splice(index, 1);
          this.deselectionValue[section].push(item[this.configuration[section].selectionReference]);
        } else if (!this.selectedStatus[section] && value == true) {
          const index = this.selectionValue[section].indexOf(item[this.configuration[section].selectionReference]);
          if (index > -1) this.selectionValue[section].splice(index, 1);
          this.selectionValue[section].push(item[this.configuration[section].selectionReference]);
        } else {
          const indexSelected = this.selectionValue[section].indexOf(item[this.configuration[section].selectionReference]);
          const indexDeSelected = this.deselectionValue[section].indexOf(item[this.configuration[section].selectionReference]);
          if (indexSelected > -1) this.selectionValue[section].splice(indexDeSelected, 1);
          if (indexDeSelected > -1) this.deselectionValue[section].splice(indexSelected, 1);
        }
        this.emitSelectionValue(section);
    }

    emitSelectionValue(section:string){
        this.selectionValueOutput.emit({
            selectedStatus : this.selectedStatus,
            selectionValue : this.selectionValue,
            deselectionValue : this.deselectionValue,
            section : section
        })
    }

    handleFilter(e:any,section:string,head:string){
        if (e.code == "Enter" || e.code == "NumpadEnter") {
            this.handleSearch(section);
        }
      
        if (e.code == "Delete") {
            this.removeInput(section,head);
            this.handleSearch(section);
        }
    }

    handleSearch(section:string) {
        const dataEmit:any = this.filter;
        dataEmit.section = section
        this.filterValueOutput.emit(this.filter);
    }

    removeInput(section:string,head:string) {
        this.filter[section][head] = "";
    }

    handleObjectSelected(section:string,item:any){
        const keyItem = this.configuration[section].selectionReference;
        const result = this.selectionValue[section].includes(item[keyItem]);
        item.selected = result;
    }

    handlePagination(section:string,event:any){
        const dataEmit:{[key:string]:any} = {};
        dataEmit[section] = event;
        dataEmit.section = section;
        this.paginationValueOutput.emit(dataEmit);
    }

    emitAdvancedSearch(section:string){
        this.advancedResearchButton.emit(section);
    }
}