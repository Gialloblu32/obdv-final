import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() contentImg = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAlt?: string;  
  @Input() contentP?: string;

  ngOnInit(): void {
  }

}
