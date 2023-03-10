import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'osvaldo';
  nombreUpper: string = 'OSVALDO';
  nombreCompleto: string = 'oSvaLdo menDoZa';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
