import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, lastValueFrom, map, Observable, of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

const API_BRAND_URL = `${environment.apiUrl}aaron/brand`;
const API_MODEL_URL = `${environment.apiUrl}aaron/model`;


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  insertedBrand$: Observable<boolean>;
  insertedBrandSubject: BehaviorSubject<boolean>;

  insertedModel$: Observable<boolean>;
  insertedModelSubject: BehaviorSubject<boolean>;

  reloadBrandData$: Observable<boolean>;
  reloadBrandDataSubject$ : BehaviorSubject<boolean>;

  constructor(
    private http:HttpClient,
    private commonService:CommonService
  ) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.insertedBrandSubject = new BehaviorSubject<boolean>(false);
    this.insertedBrand$ = this.isLoadingSubject.asObservable();

    this.insertedModelSubject = new BehaviorSubject<boolean>(false);
    this.insertedModel$ = this.isLoadingSubject.asObservable();

    this.reloadBrandDataSubject$ = new BehaviorSubject<boolean>(false);
    this.reloadBrandData$ = this.reloadBrandDataSubject$.asObservable();

  }

  saveBrand(body:object){    
    this.isLoadingSubject.next(true);
    console.log(`${API_BRAND_URL}`);
    
    const apiCall = this.http.post<any>(`${API_BRAND_URL}`, body).pipe(
      map((data: any) => {
        if (data.status != "200") {
          throw Error(data?.message);
        }
        this.insertedBrandSubject.next(true);
        this.commonService.openSnackBarMessage('Insertion Marque avec succès!','success');
      }),
      catchError((err) => {
        console.error('err save car ::: >', err);
        this.commonService.openSnackBarMessage('Erreur : La marque existe déjà','error');
        return of(undefined);
      }),
      finalize(() => {
        this.isLoadingSubject.next(false)
        this.reloadBrandDataSubject$.next(true);
      })
    );

    lastValueFrom(apiCall);
  }

  saveModel(body:object){    
    this.isLoadingSubject.next(true);
    
    const apiCall = this.http.post<any>(`${API_MODEL_URL}`, body).pipe(
      map((data: any) => {
        if (data.status != "200") {
          throw Error(data?.message);
        }
        this.insertedModelSubject.next(true);
        this.commonService.openSnackBarMessage('Insertion Marque avec succès!','success');
      }),
      catchError((err) => {
        console.error('err save model ::: >', err);
        this.commonService.openSnackBarMessage('Erreur : La marque existe déjà','error');
        return of(undefined);
      }),
      finalize(() => {
        this.isLoadingSubject.next(false)
        this.reloadBrandDataSubject$.next(true);
      })
    );

    lastValueFrom(apiCall);
  }
}
