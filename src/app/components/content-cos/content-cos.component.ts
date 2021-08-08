import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-cos',
  templateUrl: './content-cos.component.html',
  styleUrls: ['./content-cos.component.css']
})
export class ContentCosComponent implements OnInit {

  constructor() { }

  
  @Input() contentImgCos = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltCos?: string;  
  @Input() contentPCos?: string;

  ngOnInit(): void {
  }

}
