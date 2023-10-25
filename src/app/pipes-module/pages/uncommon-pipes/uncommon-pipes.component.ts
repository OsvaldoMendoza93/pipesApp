import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-pipes',
  templateUrl: './uncommon-pipes.component.html',
  styles: [
  ]
})

export class UncommonPipesComponent implements OnInit {
  /* i18nSelect */
  public name:string = 'Osvaldo';
  public gender:string = 'masculino'
  public invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /* i18nPrural */
  public customers:string[] = ['Maria','Osvaldo', 'Eduardo', 'Fernando', 'Oscar']
  public customersMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other':  'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(){
    this.name = 'Ana';
    this.gender = 'femenino';
  }

  borrarCliente(){
    this.customers.shift();
  }

  /* KeyValue Pipe */
  public person = {
    name: 'Osvaldo',
    age: 30,
    address: 'CDMX, México'
  }

  /* Json Pipe */
  public hero = [
    {
      name: 'Superman',
      canFly: true
    },
    {
      name: 'Robin',
      canFly: false
    },
    {
      name: 'Aquaman',
      canFly: false
    }
  ]

  /* Async Pipe */
  public myObservable$ = interval(2000)

  public promiseValue = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500);
  })

}
