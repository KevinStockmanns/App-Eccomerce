import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }



  deleteObjectEmpty(obj:any){
    if (typeof obj !== 'object' || obj === null) return obj;

    for(const key in obj){
      if(Array.isArray(obj[key])){
        this.deleteObjectEmpty(obj[key]);
      }else if(typeof obj[key] == 'object' && !Array.isArray(obj[key]) && obj[key] != undefined && obj[key] != null){
        this.deleteObjectEmpty(obj[key]);
      }

      if((!obj[key] && obj[key]!= 0) || obj[key].length == 0 || JSON.stringify(obj[key]) == '{}')
        delete obj[key];

    }
    return obj;
  }


  getQueryParams(params:any): string[]|[] {
    let toReturn:string[] = [];

    for(const key in params){
      toReturn.push(`${key}=${params[key]}`);
    }

    return toReturn;
  }
  getQuerysForPath(params: any|null){
    let newParams = this.getQueryParams(params);
    let toReturn = "?";

    if(newParams.length == 0)
      return null;
    
    newParams.forEach((el, i)=>{
      if(i!= 0)
        toReturn += "&";
      toReturn += el;
    })

    return toReturn;
  }
}

