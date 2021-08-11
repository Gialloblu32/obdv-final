import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanzania',
  templateUrl: './tanzania.component.html',
  styleUrls: ['./tanzania.component.css']
})
export class TanzaniaComponent implements OnInit {

  constructor() { }
  
  country = "TANZANIA";
  description = "En diciembre de 2007, en conjunto con Kenia, visité Tanzania. Estuve dos semanas, recorrí parques nacionales en el norte, fuí al monte Kilimanjaro, recorrí aldeas locales, vi los animales mas asombrosos del mundo, y disfruté del caos y la belleza de Zanzibar. Te dejo algunas de mis fotos para que veas algo de lo que ví.";
  ciudad = "Arusha"
  map = "https://www.google.com.ar/maps/embed?pb=!1m18!1m12!1m3!1d3994180.3103236738!2d102.73541645006655!3d12.141770919194856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCamboya!5e0!3m2!1ses!2sar!4v1624224530031!5m2!1ses!2sar"

  content = [
    {
      contentImg: '/assets/images/countries/tanzania/tanzania-pic (1).jpeg',
      contentAlt: 'Banderas en la frontera',
      contentP: 'Entré a Tanzania por tierra, por el norte, con destino a la ciudad de Arusha. En la frontera examinaron minuciosamente mi certificado de vacunación contra la fiebre amarila.',
    },
    {
      contentImg: '/assets/images/countries/tanzania/tanzania-pic (2).jpeg',
      contentAlt: 'Ruta',
      contentP: 'El camino desde la frontera hasta la ciudad de Arusha era rural: el norte del país es montañoso (es donde se encuentra el monte Kilimanjaro, el pico mas alto de Africa) y cuando yo llegué estaba avanzada la temporada seca, por lo que me tocó ver vacas flacas y gente trasladándolas largas distancias para alimentarlas.',
    },
    {
      contentImg: '/assets/images/countries/tanzania/tanzania-pic (11).jpeg',
      contentAlt: 'Avioneta',
      contentP: 'Mi viaje a la isla de Zanzibar contó con un condimento extra: el vuelo fue en la avioneta de la foto, y si bien los primeros minutos estaba mas miedoso, al final disfruté el vuelo y pude dormir.',
    },
    {
      contentImg: '/assets/images/countries/tanzania/tanzania-pic (12).jpeg',
      contentAlt: 'Frutas',
      contentP: 'Al llegar al alojamiento en Zanzibar, me esperaba este plato de frutas frescas. Había sido un día muy largo, con vuelo incluído, y atracvesando toda la isla de Zanzibar, que lo que tiene de hermosa lo tiene de caótica. Las frutas estaban deliciosas.',
    },
    {
      contentImg: '/assets/images/countries/tanzania/tanzania-pic (23).jpeg',
      contentAlt: 'Edificio antiguo',
      contentP: 'En la ciudad angitua de Zanzbibar se puede ver lo multi-cultural del lugar: fue siempre una zona de paso e intercambio entre India y Africa. Se la conoce como la isla de las especias.',
    },
  ]

  contentTur = [
    {
      contentImgTur: '/assets/images/countries/tanzania/tanzania-pic (5).jpeg',
      contentAltTur: 'Parque nacional',
      contentPTur: 'El principal turismo del país son los parques nacionales, donde se puede apreciar la variada y sorprendente fauna del lugar. En la foto se ve el parque Ngorongoro, que es el crater de un volcán inactivo, con un lago en el centro. Dentro del crater se encuentran todas las especies de animales e incluso especies autóctonas, que tuvieron poco contacto con el mundo exterior',
    },
    {
      contentImgTur: '/assets/images/countries/tanzania/tanzania-pic (15).jpeg',
      contentAltTur: 'Atardecer',
      contentPTur: 'Las playas de Zanzibar son un paraíso buscado para descansar, aunque además se pueden encontrar aficionados al buceo y otros deportes acuáticos. ',
    },
    {
      contentImgTur: '/assets/images/countries/tanzania/tanzania-pic (18).jpeg',
      contentAltTur: 'Casa de Mercury',
      contentPTur: 'Mucha gente viaja a la isla tambien en busca de los primeros pasos de Freddie Mercury, ya que nació en la isla de Zanzibar, cuando su padre vivía allí.',
    },
  ]

  contentHis = [
    {
      contentImgHis: '/assets/images/countries/tanzania/tanzania-pic (22).jpeg',
      contentAltHis: 'Tanques',
      contentPHis: 'El nombre del pais proviene de una mezcla de las palabras Tanganyika y Zanzibar, que son las regiones que se unieron para conformarlo.',
	  }
  ]

  contentCos = [
    {
      contentImgCos: '/assets/images/countries/tanzania/tanzania-pic (19).jpeg',
      contentAltCos: 'Banderines',
      contentPCos: 'Si bien en la region continental predomina el cristianismo, en Zanzibar la gente es mayormente musulmana. La cercanía con la peninsula arábica tuvo mucho que ver: las costas de Somalía y Kenia también suelen tener mayoría de población musulmana.',
	  },
    {
      contentImgCos: '/assets/images/countries/tanzania/tanzania-pic (21).jpeg',
      contentAltCos: 'Futbol de playa',
      contentPCos: 'Una de las costumbres que no podía faltar, porque se lo ve en cada rincón del mundo, es gente jugando al futbol. Como tampoco podía faltar encontrar a alguien jugando con la camiseta de Boca.',
	  },
    {
      contentImgCos: '/assets/images/countries/tanzania/tanzania-pic (9).jpeg',
      contentAltCos: 'Producción de café',
      contentPCos: 'La región del monte Kilimanjaro es mundialmente conocida por su producción de café. En la foto se ve gente local contando cómo es el proceso del café, desde la planta hasta que llega a la taza.',
	  },
    {
      contentImgCos: '/assets/images/countries/tanzania/tanzania-pic (7).jpeg',
      contentAltCos: 'Amok en proceso',
      contentPCos: 'El transporte público suele ser en "traffics" y el transporte animal, se hace como se puede.',
	  }
  ]

  contentNat = [
    {
      contentImgNat: '/assets/images/countries/tanzania/tanzania-pic (4).jpeg',
      contentAltNat: 'Leon',
      contentPNat: 'La naturaleza fue el primero motivo del viaje: poder hacer un safari y recorrer parques nacionales, ver animales en su estado de libertad. Aunque a través de binoculares, capturé la imagen de una leona comiendo. '
	  },
    {
      contentImgNat: '/assets/images/countries/tanzania/tanzania-pic (6).jpeg',
      contentAltNat: 'Hipo',
      contentPNat: 'La primera vez que dormí en uan carpa fue en este viaje, y tuvo la particularidad de haber sido a metros de una laguna llena de hipopótamos. Estos bichos tienen una forma muy particular de hacer caca (en serio, googléenlo) y justo capturé a uno haciendolo, salpicando al amigo :(.'
	  },
    {
      contentImgNat: '/assets/images/countries/tanzania/tanzania-pic (17).jpeg',
      contentAltNat: 'Tortu',
      contentPNat: 'Frente a Zanzibar fui a la isla "prison island" que durante muchos años fue prisión, aunque ademas es el hogar de la segunda especie de tortuga mas grande del mundo (después de las de Galápagos). Son animales de mas de 100 años y mas de 100 kilos.'
	  },
    {
      contentImgNat: '/assets/images/countries/tanzania/tanzania-pic (14).jpeg',
      contentAltNat: 'Estrella',
      contentPNat: 'Uno de mis últimos días en TAnzania, caminando por la playa me encontré con esta simpática estrella de mar. Estaba cerca de la costa y se movía muy lento.'
	  }
	 ]

   contentFot = [
    {
      contentImgFot: '/assets/images/countries/tanzania/tanzania-pic (8).jpeg',
      contentAltFot: 'Casita local',
      contentPFot: 'En las laderas del monte Kilimanjaro tuve la suerte de visitar una aldea local de productores de café. Las casitas eran así, y adentro tenian incluso cuevas para llegar a otras casas.'
	  },
    {
      contentImgFot: '/assets/images/countries/tanzania/tanzania-pic (25).jpeg',
      contentAltFot: 'Kilimanjaro',
      contentPFot: 'En rigor, esta foto fue tomada en el avión, obrevolando Kenia, pero había estado nublado y los días que estuve en el Kilimanjaro no pude ver el pico. Por suerte, en el vuelo de vuelta a Nairobi, la parte de arriba se quiso asomar.'
	  }
  ]

  ngOnInit(): void {
  }

}
