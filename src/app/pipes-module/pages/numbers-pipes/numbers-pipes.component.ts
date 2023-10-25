import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pipes',
  templateUrl: './numbers-pipes.component.html',
  styles: [
  ]
})
export class NumberPipesComponent implements OnInit {
  public netSales: number = 2567789.5567;
  public percentage: number = 0.89;
  
  constructor() { }

  ngOnInit(): void {
  }

}
