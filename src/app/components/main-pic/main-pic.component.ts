import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-pic',
  templateUrl: './main-pic.component.html',
  styleUrls: ['./main-pic.component.css']
})
export class MainPicComponent implements OnInit {

  constructor() { }

  @Input() country?: string;
  @Input() description?: string;

  ngOnInit(): void {
  }

}
