import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-tur',
  templateUrl: './content-tur.component.html',
  styleUrls: ['./content-tur.component.css']
})
export class ContentTurComponent implements OnInit {

  constructor() { }

  @Input() contentImgTur = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltTur?: string;  
  @Input() contentPTur?: string;

  ngOnInit(): void {
  }

}
