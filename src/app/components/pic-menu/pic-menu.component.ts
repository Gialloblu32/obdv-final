import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pic-menu',
  templateUrl: './pic-menu.component.html',
  styleUrls: ['./pic-menu.component.css']
})
export class PicMenuComponent implements OnInit {

  constructor() { }

  @Input() to?: string;
  @Input() image?: string;
  @Input() alt?: string;
  @Input() title?: string;

  ngOnInit(): void {
  }

toPrincipal(){
  document.getElementById("principal")?.scrollIntoView({behavior:'smooth'})
}
toTurismo(){
  document.getElementById("turismo")?.scrollIntoView({behavior:'smooth'})
}
toHistorias(){
  document.getElementById("historias")?.scrollIntoView({behavior:'smooth'})
}
toCostumbres(){
  document.getElementById("costumbres")?.scrollIntoView({behavior:'smooth'})
}
toNaturaleza(){
  document.getElementById("naturaleza")?.scrollIntoView({behavior:'smooth'})
}
toFotos(){
  document.getElementById("fotos")?.scrollIntoView({behavior:'smooth'})
}
toPintadas(){
  document.getElementById("pintadas")?.scrollIntoView({behavior:'smooth'})
}

}
