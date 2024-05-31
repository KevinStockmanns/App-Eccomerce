import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeformat',
  standalone: true
})
export class DateTimeFormatPipe implements PipeTransform {

  transform(value: string|Date|undefined, ...args: unknown[]): string|null {
    if(!value){
      return null;
    }

    let date = new Date(value);
    let dia = '0' + date.getDate();
    let mes = date.getMonth()+1;
    let hora = '0' + date.getHours();
    let min = '0' + date.getMinutes();
    let seg = '0' + date.getSeconds();
    return `${dia.slice(-2)}/${('0' + mes).slice(-2)}/${date.getFullYear()} ${hora.slice(-2)}:${min.slice(-2)}:${seg.slice(-2)}`;
  }

}
