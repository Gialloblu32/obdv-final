import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-art',
  templateUrl: './content-art.component.html',
  styleUrls: ['./content-art.component.css']
})
export class ContentArtComponent implements OnInit {

  constructor() { }

  @Input() contentImgArt = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltArt?: string;  
  @Input() contentPArt?: string;

  ngOnInit(): void {
  }

}
