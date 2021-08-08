import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})

export class DivisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toPicmenu(){
    document.getElementById("picmenu")?.scrollIntoView({behavior:'smooth'})
  }

}
