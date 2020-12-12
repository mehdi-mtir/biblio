import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monnaie'
})
export class MonnaiePipe implements PipeTransform {

  transform(value: number, symbole : string): string {
    let prix = ""; //par defaut les prix sont en Euro
    switch(symbole){
      case '$':
        value *= 1.21;
        prix = value.toFixed(2);
        break;
      case 'TND':
        value *= 3.28;
        prix = value.toFixed(3);
        break;
      case '£':
        value *= 0.92;
        prix = value.toFixed(2);
        break;
    }
    return prix + " " + symbole;
  }

}
