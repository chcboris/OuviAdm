import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

    transform(cpf: string|number): string|number {

    if (cpf) {
      const value = cpf.toString().replace(/\D/g, '');

      let cpfFormatado: string = '';

      if (value.length > 9) {
        cpfFormatado = value.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/,
          '$1.$2.$3-$4'
        );

      }else if (value.length > 7) {
        cpfFormatado = value.replace(
          /(\d{3})(\d{3})(\d{3})/,
          '$1.$2.$3'
        );

      }else if (value.length > 4) {
        cpfFormatado = value.replace(
          /(\d{3})(\d{3})/,
          '$1.$2'
        );

      }else if (value.length > 0) {
        cpfFormatado = value.replace(
          /(\d{3})/,
          '$1'
        );

      } else {
        if (cpf !== '') { cpfFormatado = value.replace(/^\d*/, '$1.$2.$3-$4'); }
      }

      return cpfFormatado;
    }
    return cpf;
  }

}
