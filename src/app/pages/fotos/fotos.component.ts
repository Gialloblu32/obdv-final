import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }
  
  contentFav = [
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (2).jpeg',
      contentAltFav: 'Caballo',
      contentPFav: 'Caballos de tiraje, Andorra'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (3).jpeg',
      contentAltFav: 'Jirafa',
      contentPFav: 'Jirafa bebé, Kenia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (4).jpeg',
      contentAltFav: 'Mono',
      contentPFav: 'Mono bostezando, Kenia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (5).jpeg',
      contentAltFav: 'Hormigas',
      contentPFav: 'Fila de hormigas, Tanzania'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (6).jpeg',
      contentAltFav: 'Palomas',
      contentPFav: 'Palomas, Buenos Aires'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (7).jpeg',
      contentAltFav: 'Lagartija',
      contentPFav: 'Lagartija flúo, Malasia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (8).jpeg',
      contentAltFav: 'Orangutan',
      contentPFav: 'Orangutan sentado en el banco, Malasia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (9).jpeg',
      contentAltFav: 'Algo',
      contentPFav: 'Vaya uno a saber qué, Malasia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (10).jpeg',
      contentAltFav: 'Elefante',
      contentPFav: 'Elefante cruzando la calle, Tailandia'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (11).jpeg',
      contentAltFav: 'Palomas',
      contentPFav: 'Palomas sobrevolando el lago, India'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (12).jpeg',
      contentAltFav: 'Tigre',
      contentPFav: 'Tigre de paseo, India'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (13).jpeg',
      contentAltFav: 'Monos',
      contentPFav: 'Familia de monos, India'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (14).jpeg',
      contentAltFav: 'Murcielago',
      contentPFav: 'Murcielago seco, electrocutado, India'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (15).jpeg',
      contentAltFav: 'Lagartija',
      contentPFav: 'Lagartija bebé, Camboya'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (16).jpeg',
      contentAltFav: 'Mosca',
      contentPFav: 'Mosca multicolor, Camboya'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (17).jpeg',
      contentAltFav: 'Libelula',
      contentPFav: 'Libélula poniendo huevos, Camboya'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (18).jpeg',
      contentAltFav: 'Bicho',
      contentPFav: 'Bicho multicolor, Camboya'
	  },
    {
      contentImgFav: '/assets/images/fav-pics/fav-pic (1).jpeg',
      contentAltFav: 'Delfin',
      contentPFav: 'Delfines públicos, esto no está chequeado. Turquía'
	  },
]

  ngOnInit(): void {
  }

}
