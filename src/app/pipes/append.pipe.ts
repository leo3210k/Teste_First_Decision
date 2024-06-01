import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string, otherString: string): string {
    if (!value || !otherString) {
      return '';
    }

    const firstInitial = value.charAt(0).toUpperCase();
    const secondInitial = otherString.charAt(0).toUpperCase();

    return firstInitial + secondInitial;
  }

}
