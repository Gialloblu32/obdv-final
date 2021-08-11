import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input() map? = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373967.0400500796!2d36.15303696689585!3d55.63109007614437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2zTW9zY8O6LCBSdXNpYQ!5e0!3m2!1ses!2sar!4v1628631615562!5m2!1ses!2sar";

  ngOnInit(): void {
  }

}
