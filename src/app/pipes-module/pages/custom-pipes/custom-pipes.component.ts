import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styles: [
  ]
})
export class CustomPipesComponent implements OnInit {
  enMayusculas: boolean = true;
  ordenarPor:string = '';
  arrayHeroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
  ];

  constructor() {}

  ngOnInit(): void {
  }

  cambiarValor(){
    this.enMayusculas = !this.enMayusculas 
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor
  }

}
