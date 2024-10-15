import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

    transform(cep: string|number): string|number {

    if (cep) {
      const value = cep.toString().replace(/\D/g, '');

      let cepFormatado: string = '';

      if (value.length > 7) {
        cepFormatado = value.replace(
          /(\d{5})(\d{3})/,
          '$1-$2'
        );

      }else if (value.length > 5) {
        cepFormatado = value.replace(
          /(\d{5})(\d{3})/,
          '$1-$2'
        );

      } else {
        if (cep !== '') { cepFormatado = value.replace(/^\d*/, '$1-$2'); }
      }

      return cepFormatado;
    }
    return cep;
  }

}
