import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indonesia',
  templateUrl: './indonesia.component.html',
  styleUrls: ['./indonesia.component.css']
})
export class IndonesiaComponent implements OnInit {

  constructor() { }

  country = "INDONESIA";
  description = "Tras bajar por Tailandia, Malasia y Singapur, pasé tres semanas increíbles en Indonesia. Me encontré con mi hermana en el aeropuerto de Yakarta y empezamos un raid sin parar durante diez dias en la isla de Java, y después relajamos un poco yendo a Bali. Proximamente voy a completar esta página para que tengas a tu alcance toda la info del viaje. ¡Gracias!";
  ciudad = "Jakarta"

  content = [
    {
      contentImg: '/assets/images/countries/indonesia/indonesia-pic (1).jpeg',
      contentAlt: 'Foto',
      contentP: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    },
    {
      contentImg: '/assets/images/countries/indonesia/indonesia-pic (2).jpeg',
      contentAlt: 'Foto',
      contentP: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    }
  ]

  contentTur = [
    {
      contentImgTur: '/assets/images/countries/indonesia/indonesia-pic (3).jpeg',
      contentAltTur: 'Foto',
      contentPTur: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
    }
  ]

  contentHis = [
    {
      contentImgHis: '/assets/images/countries/indonesia/indonesia-pic (4).jpeg',
      contentAltHis: 'Foto',
      contentPHis: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  },
    {
      contentImgHis: '/assets/images/countries/indonesia/indonesia-pic (5).jpeg',
      contentAltHis: 'Foto',
      contentPHis: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  }
  ]

  contentCos = [
    {
      contentImgCos: '/assets/images/countries/indonesia/indonesia-pic (6).jpeg',
      contentAltCos: 'Foto',
      contentPCos: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  },
    {
      contentImgCos: '/assets/images/countries/indonesia/indonesia-pic (7).jpeg',
      contentAltCos: 'Foto',
      contentPCos: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.',
	  }
  ]

  contentNat = [
    {
      contentImgNat: '/assets/images/countries/indonesia/indonesia-pic (8).jpeg',
      contentAltNat: 'Foto',
      contentPNat: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  },
    {
      contentImgNat: '/assets/images/countries/indonesia/indonesia-pic (9).jpeg',
      contentAltNat: 'Foto',
      contentPNat: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  }
	 ]

   contentFot = [
    {
      contentImgFot: '/assets/images/countries/indonesia/indonesia-pic (10).jpeg',
      contentAltFot: 'Foto',
      contentPFot: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  },
    {
      contentImgFot: '/assets/images/countries/indonesia/indonesia-pic (11).jpeg',
      contentAltFot: 'Foto',
      contentPFot: 'Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto. Esta es una descripción genérica de la foto.'
	  }
]

  ngOnInit(): void {
  }

}
