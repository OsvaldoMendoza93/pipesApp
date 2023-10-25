import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(arrayHeroes: Array<Heroe>, ordenarPor: string = 'sin valor'): Array<Heroe> {
    switch (ordenarPor) {
      case 'nombre':
        return arrayHeroes.sort((a,b)=> a.nombre > b.nombre ? 1 : -1);

      case 'vuela':
        return arrayHeroes.sort((a,b)=> a.vuela > b.vuela ? -1 : 1);
      
      case 'color':
        return arrayHeroes.sort((a,b)=> a.color > b.color ? 1 : -1); 

      default:
        return arrayHeroes;
    }
  }
}
