import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-his',
  templateUrl: './content-his.component.html',
  styleUrls: ['./content-his.component.css']
})
export class ContentHisComponent implements OnInit {

  constructor() { }

  @Input() contentImgHis = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltHis?: string;  
  @Input() contentPHis?: string;

  ngOnInit(): void {
  }

}
