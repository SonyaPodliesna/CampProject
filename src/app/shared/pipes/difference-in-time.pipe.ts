import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'differenceInTime'
})
export class DifferenceInTimePipe implements PipeTransform {
  transform(value: Date): string {
    const difference = Math.abs(new Date().getTime() - new Date(value).getTime());
    const diffInMinutes = difference / 1000 / 60;

    if (diffInMinutes >= 60 && diffInMinutes < 1440) {
      return `${Math.round(diffInMinutes / 60)} hours ago`;
    } else if (diffInMinutes >= 1440 && diffInMinutes <= 2880) {
      return 'Yesterday';
    } else if (diffInMinutes >= 2880) {
      return `${Math.round(diffInMinutes / 60 / 24)} days ago`;
    } else {
      return `${diffInMinutes} mins ago`;
    }
  }
}


