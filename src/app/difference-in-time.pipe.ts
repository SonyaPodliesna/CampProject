import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'differenceInTime'
})
export class DifferenceInTimePipe implements PipeTransform {

  transform(value: Date): string {
    let difference = Math.abs(new Date().getTime() - new Date(value).getTime());

    console.log(difference)

    const diffInMinutes = difference / 1000 / 60 / 60;

    if (diffInMinutes >= 60) {
      return `${Math.round(diffInMinutes / 60)} hours ago`
    }

    return `${Math.round(difference / 1000 / 60 / 60)} mins ago`;
  }

}
