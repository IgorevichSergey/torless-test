import { Pipe, PipeTransform } from '@angular/core';

interface IFilterParams {
  by: string;
  value: string;
}

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], option?: IFilterParams): any {
    if (option && typeof option === 'object' && (option as IFilterParams).value) {
      if (!(option as IFilterParams).by) {
        return array.filter(item => (item as string).indexOf((option as IFilterParams).value) !== -1);
      } else {
        return array.filter(item => item[(option as IFilterParams).by].indexOf((option as IFilterParams).value) !== -1);
      }
    } else {
      return array;
    }

  }
}
