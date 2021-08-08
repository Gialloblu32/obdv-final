import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-nat',
  templateUrl: './content-nat.component.html',
  styleUrls: ['./content-nat.component.css']
})
export class ContentNatComponent implements OnInit {

  constructor() { }

  @Input() contentImgNat = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltNat?: string;  
  @Input() contentPNat?: string;

  ngOnInit(): void {
  }

}
