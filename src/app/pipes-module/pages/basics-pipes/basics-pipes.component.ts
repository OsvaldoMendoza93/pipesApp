import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-pipes',
  templateUrl: './basics-pipes.component.html',
  styles: [
  ]
})
export class BasicsPipesComponent implements OnInit {
  public nameLowerCase: string = 'osvaldo';
  public nameUpperCase: string = 'OSVALDO';
  public complateName: string = 'oSvaLdo menDoZa';

  public date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
