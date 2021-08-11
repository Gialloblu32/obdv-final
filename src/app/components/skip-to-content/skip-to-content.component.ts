import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-to-content',
  templateUrl: './skip-to-content.component.html',
  styleUrls: ['./skip-to-content.component.css']
})
export class SkipToContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toContent(){
    document.getElementById("content")?.scrollIntoView({behavior:'smooth'})
  }

}
