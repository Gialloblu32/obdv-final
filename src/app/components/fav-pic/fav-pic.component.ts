import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fav-pic',
  templateUrl: './fav-pic.component.html',
  styleUrls: ['./fav-pic.component.css']
})
export class FavPicComponent implements OnInit {

  constructor() { }

  @Input() contentImgFav = "/assets/images/camboya-pic (1).jpeg";
  @Input() contentAltFav?: string;  
  @Input() contentPFav?: string;

  ngOnInit(): void {
  }

}
