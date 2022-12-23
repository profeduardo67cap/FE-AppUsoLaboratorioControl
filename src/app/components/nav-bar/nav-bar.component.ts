import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{
  img='https://commons.wikimedia.org/wiki/File:Angular_full_color_logo.svg';

  constructor(){
  }

  ngOnInit(): void{

  }
}
