import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], args?: {by: string, value: any}): any {
    if (args.value) {
      if (!args.by) {
        return array.filter(item => (item as string).indexOf(args.value) !== -1);
      } else {
        return array.filter(item => item[args.by].indexOf(args.value) !== -1);
      }
    } else {
      return array;
    }

  }
}
