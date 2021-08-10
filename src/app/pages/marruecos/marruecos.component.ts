import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marruecos',
  templateUrl: './marruecos.component.html',
  styleUrls: ['./marruecos.component.css']
})
export class MarruecosComponent implements OnInit {

  constructor() { }

  country = "MARRUECOS";
  description = "En pleno verano de 2016, crucé el estrecho de Gibraltar para enfrentar el mayor choque cultural hasta el momento. Marruecos fue intensidad de principio a fin y me gustó tanto que me debo aún una segunda visita. Proximamente voy a completar esta página para que tengas a tu alcance toda la info del viaje. ¡Gracias!";
  ciudad = "Casablanca"

  content = [
    {
      contentImg: '/assets/images/countries/marruecos/marruecos-pic (1).jpeg',
      contentAlt: 'Foto',
      contentP: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    },
    {
      contentImg: '/assets/images/countries/marruecos/marruecos-pic (2).jpeg',
      contentAlt: 'Foto',
      contentP: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    },
  ]

  contentTur = [
    {
      contentImgTur: '/assets/images/countries/marruecos/marruecos-pic (3).jpeg',
      contentAltTur: 'Foto',
      contentPTur: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    },
    {
      contentImgTur: '/assets/images/countries/marruecos/marruecos-pic (4).jpeg',
      contentAltTur: 'Foto',
      contentPTur: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    }
  ]

  contentHis = [
    {
      contentImgHis: '/assets/images/countries/marruecos/marruecos-pic (5).jpeg',
      contentAltHis: 'Foto',
      contentPHis: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  },
    {
      contentImgHis: '/assets/images/countries/marruecos/marruecos-pic (6).jpeg',
      contentAltHis: 'Foto',
      contentPHis: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  }
  ]

  contentCos = [
    {
      contentImgCos: '/assets/images/countries/marruecos/marruecos-pic (7).jpeg',
      contentAltCos: 'Foto',
      contentPCos: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  },
    {
      contentImgCos: '/assets/images/countries/marruecos/marruecos-pic (8).jpeg',
      contentAltCos: 'Foto',
      contentPCos: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  }
  ]

  contentNat = [
    {
      contentImgNat: '/assets/images/countries/marruecos/marruecos-pic (9).jpeg',
      contentAltNat: 'Foto',
      contentPNat: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  },
    {
      contentImgNat: '/assets/images/countries/marruecos/marruecos-pic (10).jpeg',
      contentAltNat: 'Foto',
      contentPNat: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  }
	 ]

   contentFot = [
    {
      contentImgFot: '/assets/images/countries/marruecos/marruecos-pic (11).jpeg',
      contentAltFot: 'Foto',
      contentPFot: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  },
    {
      contentImgFot: '/assets/images/countries/marruecos/marruecos-pic (12).jpeg',
      contentAltFot: 'Foto',
      contentPFot: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  }
]


  ngOnInit(): void {
  }

}
