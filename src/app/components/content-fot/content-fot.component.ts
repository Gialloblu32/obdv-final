import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-fot',
  templateUrl: './content-fot.component.html',
  styleUrls: ['./content-fot.component.css']
})
export class ContentFotComponent implements OnInit {

  constructor() { }

  @Input() contentImgFot = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltFot?: string;  
  @Input() contentPFot?: string;

  ngOnInit(): void {
  }

}
