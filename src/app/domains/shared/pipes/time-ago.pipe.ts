import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date | string): string {
    
    if (!value) return 'Fecha no válida';

    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
      return 'Justo ahora';

    const intervals: { [key: string]: number } = {
      'año': 31536000,
      'mes': 2592000,
      'semana': 604800,
      'día': 86400,
      'hora': 3600,
      'minuto': 60,
      'segundo': 1
    };

    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0)
        return `hace ${counter} ${i}${counter === 1 ? '' : 's'}`;
    }
    return value.toString();
  }


}
