import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    
    let result: string = value;

    if ( activar ) {
      result = value.replace(new RegExp(/[A-Z|a-z]/g), '*');
    }

    return result;
  }

}
