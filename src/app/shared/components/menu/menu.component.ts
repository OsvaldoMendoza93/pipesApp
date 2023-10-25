import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Texts & Dates',
            icon: 'pi pi-align-left',
            routerLink: '/pipes/basics'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/pipes/numbers'
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-globe',
            routerLink: '/pipes/uncommons'
          },
        ]
      },
      {
        label: 'Customs',
        icon: 'pi pi-cog',
        routerLink: '/pipes/customs'
      }
    ];
  }

}
