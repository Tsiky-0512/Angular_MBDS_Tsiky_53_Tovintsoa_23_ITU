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

  getAssignements(){
    this.loadingData.next(true);
    return this.http.get(`${API_ASSIGNEMENT_URL}`).pipe(
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

  saveAssignement(body:any) {
    return this.http.post(`${API_ASSIGNEMENT_URL}`,body).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage(data.error,"error",5000);
          return of(undefined);
        }
        this.common.openSnackBarMessage("Insertion Assignement avec succès.","error",5000);
      }),
      catchError((err) => {
        this.common.openSnackBarMessage(`Erreur : ${err}`,'error',5000);
        return of(undefined);
      })
    )
  }

  deleteAssignement(idAssignement:string) {
    return this.http.delete(`${API_ASSIGNEMENT_URL}/${idAssignement}`).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage(data.error,"error",5000);
          return of(undefined);
        }
        this.common.openSnackBarMessage("Assignement supprimé avec succès.","error",5000);
      }),
      catchError((err) => {
        this.common.openSnackBarMessage(`Erreur : ${err}`,'error',5000);
        return of(undefined);
      })
    )
  }

  updateAssignement(body:any){
    return this.http.put(`${API_ASSIGNEMENT_URL}`,body).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage(data.error,"error",5000);
          return of(undefined);
        }
        this.common.openSnackBarMessage("Mise à jour Assignement avec succès.","error",5000);
      }),
      catchError((err) => {
        this.common.openSnackBarMessage(`Erreur : ${err}`,'error',5000);
        return of(undefined);
      })
    )
  }

}
