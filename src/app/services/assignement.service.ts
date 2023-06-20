import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

const API_ASSIGNEMENT_URL = `${environment.apiUrl}api/assignments`


@Injectable({
  providedIn: 'root'
})
export class AssignementService {
  loadingData:BehaviorSubject<boolean>;


  constructor(
    private http:HttpClient,
    private common:CommonService
  ) {
    this.loadingData = new BehaviorSubject<boolean>(false);

  }

  getAssignements(body:any){
    this.loadingData.next(true);
    return this.http.post(`${API_ASSIGNEMENT_URL}`,body).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage(`Erreur au serveur ${data?.data}`,"error",5000)
          return of(undefined);
        }
        return data;
      }),
      catchError((err) => {
        this.common.openSnackBarMessage(`Erreur : ${err}`,'error',5000);
        return of(undefined);
      }),
      finalize(()=>{
        this.loadingData.next(false);
      })
    );
  }

}
