import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  divtitle = "Portfolio";
  divsubtitle = "Mirá mis otros trabajos";

  ngOnInit(): void {
  }

}
