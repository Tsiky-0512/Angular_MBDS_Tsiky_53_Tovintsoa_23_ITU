import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

const API_ETUDIANT_URL = `${environment.apiUrl}api/auteur`;


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(    
    private http:HttpClient,
    private common:CommonService
  ) { }


  getAuteur(){
    return this.http.get(`${API_ETUDIANT_URL}`).pipe(
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
      })
    );
  }
}
