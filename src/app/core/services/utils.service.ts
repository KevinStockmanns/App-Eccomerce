import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  deleteObjectEmpty(obj: any) {
    if (typeof obj !== 'object' || obj === null) return obj;

    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        this.deleteObjectEmpty(obj[key]);
      } else if (
        typeof obj[key] == 'object' &&
        !Array.isArray(obj[key]) &&
        obj[key] != undefined &&
        obj[key] != null
      ) {
        this.deleteObjectEmpty(obj[key]);
      }

      if (
        (!obj[key] && obj[key] != 0) ||
        obj[key].length == 0 ||
        JSON.stringify(obj[key]) == '{}'
      )
        delete obj[key];
    }
    return obj;
  }
  getChanges(
    original: any,
    json: any,
    ignore?: string[],
    identificador?: string
  ) {
    const changes: any = Array.isArray(json) ? [] : {};

    for (const key in json) {
      if (ignore?.includes(key)) {
        changes[key] = json[key];
        continue;
      }

      if (Array.isArray(json[key])) {
        changes[key] = json[key]
          .map((el: any) => {
            if (identificador && el[identificador]) {
              const itemOriginal = original[key].find(
                (item: any) => item[identificador] === el[identificador]
              );
              return itemOriginal
                ? this.getChanges(itemOriginal, el, ignore, identificador)
                : el;
            }
            return el;
          })
          .filter((el: any) => Object.keys(el).length > 0);
        if (changes[key].length === 0) {
          delete changes[key];
        }
      } else if (typeof json[key] === 'object' && json[key] !== null) {
        const nestedChanges = this.getChanges(
          original[key],
          json[key],
          ignore,
          identificador
        );
        if (Object.keys(nestedChanges).length > 0) {
          changes[key] = nestedChanges;
        }
      } else if (original[key] != json[key]) {
        changes[key] = json[key];
      }
    }

    return changes;
  }

  getQueryParams(params: any): string[] | [] {
    let toReturn: string[] = [];

    for (const key in params) {
      toReturn.push(`${key}=${params[key]}`);
    }

    return toReturn;
  }
  getQuerysForPath(params: any | null) {
    let newParams = this.getQueryParams(params);
    let toReturn = '?';

    if (newParams.length == 0) return null;

    newParams.forEach((el, i) => {
      if (i != 0) toReturn += '&';
      toReturn += el;
    });

    return toReturn;
  }
}
