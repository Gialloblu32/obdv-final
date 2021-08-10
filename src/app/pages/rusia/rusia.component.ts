import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rusia',
  templateUrl: './rusia.component.html',
  styleUrls: ['./rusia.component.css']
})
export class RusiaComponent implements OnInit {

  constructor() { }

  country = "RUSIA";
  description = "Después de trabajar cuatro meses en el crucero, me fui a Rusia, a partir de los octavos de final del mundial de futbol del 2018. Allá me encontré con mi hermano, su novia y un amigo, estuviumos tres semanas, recorrimos Moscú, Sergiev Posad, Suzdal, Samara, Kazan, Nizhny Novgorod, San Petesburgo, y aprovechamos para visitar un poco de Finlandia y Estonia.";
  ciudad = "Moscu"

  content = [
    {
      contentImg: '/assets/images/countries/rusia/rusia-pic (4).jpeg',
      contentAlt: 'San Basilio',
      contentP: 'Cuando era chico me regalaron un rompecabezas de la basílica de San Basilio y nunca imaginé que algún día la vería con mis ojos. La plaza roja fue un lugar obligatorio de pasada en mi estadía en Moscú, ya que además de estar cerca del alojamiento, siempre había algun evento allí durante el mundial.',
    },
    {
      contentImg: '/assets/images/countries/rusia/rusia-pic (3).jpeg',
      contentAlt: 'Bandera de Bilardo',
      contentP: 'Caminando por las calles de Kazán, el día del partido de Argentina con Francia, era hermoso mirar los personajes pasar. Argentinos y franceses vestidos e incluso disfrazados para la ocasión. Conseguí fotografiar a estos dos agradecidos.',
    },
    {
      contentImg: '/assets/images/countries/rusia/rusia-pic (8).jpeg',
      contentAlt: 'Museo Segunda Guerra',
      contentP: 'Todo es grande. Esto es completamente subjetivo, pero todo en Rusia me pareció grande. Esta foto es en el museo de la Segunda Guerra Mundial, una estatua imponente, bajo una cúpula donde se proyectaban imágenes de animaciones .',
    }
  ]

  contentTur = [
    {
      contentImgTur: '/assets/images/countries/rusia/rusia-pic (9).jpeg',
      contentAltTur: 'Subte',
      contentPTur: 'Uno de los días en Moscú nos dedicamos a viajar en subte. Cada una de las estaciones tiene un estilo particular, con mucha carga artística e histórica.',
    },
    {
      contentImgTur: '/assets/images/countries/rusia/rusia-pic (15).jpeg',
      contentAltTur: 'Caballos de hierro',
      contentPTur: 'La ciudad de San Petesburgo fue la capital de Rusia durante el último período zarista y fue donde comenzó la llamada "revolución rusa". Es una ciudad mas moderna que Moscú, y mas multi-cultural.',
    }
  ]

  contentHis = [
    {
      contentImgHis: '/assets/images/countries/rusia/rusia-pic (16).jpeg',
      contentAltHis: 'Union sovietica',
      contentPHis: 'Está muy presente la simbología de la Union Soviética (URRS - CCCP). Me sorprendió ver la cantidad de escudos en todos lados de la ciudad, sobre todo en donde el estado había hecho obras públicas. En la foto, la placa en el teatro Bolshoi, famoso teatro de ballet de Moscu.',
	  },
    {
      contentImgHis: '/assets/images/countries/rusia/rusia-pic (6).jpeg',
      contentAltHis: 'Plaza Roja',
      contentPHis: 'En la plaza Roja está el mausoleo de Lenin. Diariamente se puede entrar a ver el cuerpo del político Ruso, donde le rinden homenaje. Durante un tiempo, allí tambien estuvo Stalin, aunque tiempo después lo movieron afuera, junto a otras figuras históricas, tambien en la plaza Roja, el centro de Moscú.',
	  }
  ]

  contentCos = [
    {
      contentImgCos: '/assets/images/countries/rusia/rusia-pic (7).jpeg',
      contentAltCos: 'Bebida en el transporte',
      contentPCos: 'En las zonas rurales, es común que los colectivos demoren mucho en llegar ced un punto a otro, y vi varios casos de gente bebiendo en el transporte público.',
	  },
    {
      contentImgCos: '/assets/images/countries/rusia/rusia-pic (2).jpeg',
      contentAltCos: 'Television',
      contentPCos: 'En el tren a Kazan tuvimos televisión en la habitación. La tele transmitía dos canales, y los dos daban películas en blanco y negro sin subtítulos.',
    }
  ]

  contentNat = [
    {
      contentImgNat: '/assets/images/countries/rusia/rusia-pic (17).jpeg',
      contentAltNat: 'Rio Volga',
      contentPNat: 'Para el partido de Francia y Uruguay nos fuimos a Nizhni Novgorod. Una de las atracciones del lugar es que lo atraviesa el río Volga, que es el mas largo de Europa.'
	  }
	 ]

   contentFot = [
    {
      contentImgFot: '/assets/images/countries/rusia/rusia-pic (11).jpeg',
      contentAltFot: 'Poster del mundial',
      contentPFot: 'Dentro de mis fotos favoritas está esta, porque tiene el poster del mundial, que tiene una mezcla de retro, ruso, y futbolero que me emociona.'
	  },
    {
      contentImgFot: '/assets/images/countries/rusia/rusia-pic (10).jpeg',
      contentAltFot: 'Tren a Kazan',
      contentPFot: 'Los viajes en tren nocturnos eran una experiencia en si mismos. Algún día espero volver y completar el viaje transiberiano.'
	  },
    {
      contentImgFot: '/assets/images/countries/rusia/rusia-pic (5).jpeg',
      contentAltFot: 'Museo de videojuegos',
      contentPFot: 'Uno de los días en Moscú fuimos al museo de videojuegos soviéticos. Una colección de los primeros juegos diseñados, con 15 fichines para jugarlos a todos. Uno de los mejores días del viaje.'
	  }
]

  ngOnInit(): void {
  }

}
