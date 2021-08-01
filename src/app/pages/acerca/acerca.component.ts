import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor() { }

  title = "@gz32";
  subtitle = "Gonzalo Zacarias - Desarrollo Web";

  divtitle = "Portoflio";
  divsubtitle = "Mirá mis otros trabajos";

  ngOnInit(): void {
  }

}
