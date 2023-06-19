import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  infoSnackBar: Array<string> = ['snack-bar-success', 'snack-bar-info-echape', 'snack-bar-info']


  constructor(
    private snackBar: MatSnackBar
  ) { }


  openSnackBarMessage(message: string, type: string, duration: number = 3000) {

    this.snackBar.open(message, 'Fermer', {
      duration: duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: [this.colorSnackBarHandler(type)],
    });
  }

  toCamelCase(str: string) {
    return str
      .replace(/^[a-z]/g, char => ` ${char.toUpperCase()}`)
      .replace(/(?:\s+)/, char => '');
  }

  convertDistance(distanceStr: string) {
    if (!distanceStr) return '';
    const distanceInt = parseInt(distanceStr?.replace(" ", ""));
    const formattedDistance = distanceInt.toLocaleString("fr-FR");
    return `${formattedDistance} km`;
  }

  colorSnackBarHandler(type: string) {
    let result: string = 'success';
    switch (type) {
      case 'success':
        result = this.infoSnackBar[0];
        break;
      case 'error':
        result = this.infoSnackBar[1];
        break;
      case 'info':
        result = this.infoSnackBar[2];
        break;
      default:
        result = this.infoSnackBar[0];
        break;
    }
    return result;
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

  formatDate(value:string){
    const dateObj: Date = new Date(value.replace('Z', '+00:00'));
    const newDateStr: string = dateObj.toISOString().replace('T', ' ').slice(0, -5);
    return newDateStr
  }

  timestamptoDate(timestamp:string){
    return timestamp.split('T')[0];
  }

  numberSortToLetter(value:number){
    if (value == -1) {
      return "desc";
    }else{
      return "asc";
    }
  }

}
