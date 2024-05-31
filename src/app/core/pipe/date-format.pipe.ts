import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string|Date|undefined, ...args: unknown[]): string|null {
    if(value){
      let date = new Date(value);
      let dia = ('0' + date.getDate()).slice(-2);
      let mes = ('0' + (date.getMonth()+1)).slice(-2);

      return `${dia}/${mes}/${date.getFullYear()}`
      
    }


    return null;
  }

}
