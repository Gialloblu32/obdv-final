import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  constructor() { }

  @Input() divtitle?: string;
  @Input() divsubtitle?: string;

  ngOnInit(): void {
  }

}
