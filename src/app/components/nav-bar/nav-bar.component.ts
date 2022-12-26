import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{
  img='https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png';

  constructor(){
  }

  ngOnInit(): void{

  }
}
