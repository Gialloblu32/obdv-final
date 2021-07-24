import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

/*   contentImg = "Imagen";
  contentAlt = "Alt";
  contentP = "Párrafo"; */

  @Input() contentImg?: string;
  @Input() contentAlt?: string;  
  @Input() contentP?: string;

  ngOnInit(): void {
  }

}
