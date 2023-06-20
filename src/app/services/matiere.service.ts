import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

const API_MATIERE_URL = `${environment.apiUrl}api/matiere`;

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(    
    private http:HttpClient,
    private common:CommonService
  ) { }


  getMatiere(){
    return this.http.get(`${API_MATIERE_URL}`).pipe(
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

  saveMatiere(body:any) {
    return this.http.post(`${API_MATIERE_URL}`,body).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage(data.error,"error",5000);
          return of(undefined);
        }
        return data;
      }),
      catchError((err) => {
        this.common.openSnackBarMessage(`Erreur : ${err}`,'error',5000);
        return of(undefined);
      })
    )
  }

  uploadMatiereImage(matiereId:string,file:File){
    const uploadData = new FormData();
    uploadData.append('file',file);
    return this.http.post(`${API_MATIERE_URL}/uploadImageMatiere?id=${matiereId}`,uploadData).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage("Erreur Upload Image","error",5000);
          return of(undefined);
        }
        this.common.openSnackBarMessage("Insertion des images avec succès.","error",5000);
      }),
      catchError((err) => {        
        this.common.openSnackBarMessage(`Erreur ${err}`,'error',5000);
        return of(undefined);
      })
    );
  }

  uploadProfImage(matiereId:string,file:File){
    const uploadData = new FormData();
    uploadData.append('file',file);
    return this.http.post(`${API_MATIERE_URL}/uploadImageProf?id=${matiereId}`,uploadData).pipe(
      map((data:any)=>{
        if (data.status != "200") {
          this.common.openSnackBarMessage("Erreur Upload Image","error",5000);
          return of(undefined);
        }
        this.common.openSnackBarMessage("Insertion des images avec succès.","error",5000);
      }),
      catchError((err) => {        
        this.common.openSnackBarMessage(`Erreur ${err}`,'error',5000);
        return of(undefined);
      })
    );
  }
}
