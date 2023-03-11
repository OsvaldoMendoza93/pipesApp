import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  /* i18nSelect */
  nombre:string = 'Osvaldo';
  genero:string = 'masculino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /* i18nPrural */
  clientes:string[] = ['Maria','Osvaldo', 'Eduardo', 'Fernando', 'Oscar']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other':  'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(){
    this.nombre = 'Ana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.shift();
  }

  /* KeyValue Pipe */
  persona = {
    nombre: 'Osvaldo',
    edad: 30,
    direccion: 'CDMX, México'
  }

  /* Json Pipe */
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  /* Async Pipe */
  miObservable$ = interval(2000)

  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500);
  })

}
