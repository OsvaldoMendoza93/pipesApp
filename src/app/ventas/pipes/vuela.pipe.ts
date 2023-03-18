import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela' // nombre del pipe como se va a usar
})
export class VuelaPipe implements PipeTransform{
   transform(value: boolean): string{
    return value ? 'vuela' : 'no vuela' ;   
   }
} 