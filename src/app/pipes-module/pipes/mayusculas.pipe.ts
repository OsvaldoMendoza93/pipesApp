import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas' // nombre del pipe como se va a usar
})
export class MayusculasPipe implements PipeTransform{
   transform(value: string, enMayusculas: boolean = true): string{
    return enMayusculas ? value.toLocaleUpperCase() : value.toLocaleLowerCase() ;   
   }
} 