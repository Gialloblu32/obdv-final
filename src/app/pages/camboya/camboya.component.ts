import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camboya',
  templateUrl: './camboya.component.html',
  styleUrls: ['./camboya.component.css']
})
export class CamboyaComponent implements OnInit {

  constructor() { }

  country = "CAMBOYA";
  description = "Viví en Camboya un año y medio. Llegué en marzo de 2019 después de unos meses de viaje por Asia, y me fuí en agosto de 2020, en medio del caos por la pandemia del coronavirus. Antes de llegar, yo tenía amigos viviendo en la ciudad de Siem Reap, lo que hizo mas facil para entender algunas cosas del lugar. Trabajé en algunos lugares como profesor de inglés part-time y en una escuela trabajé full-time en segundo, tercero y cuarto grado, incluso en los meses en que la escuela estuvo cerrada por cuarentena, ya que seguí dándo clases online. Mi casa quedaba a unos diez minutos en bici del centro. El lugar contaba con diez casitas, un lindo parque y una pileta que conservaba el agua a temperatura para el mate durante todo el dia. En Camboya hacer calor. La gente es copada, alegre y generalmente se interesan por saber un poco mas de vos. Por mas que casi nadie hable inglés, con señas y buena voluntad, es posible entenderse. Hay muchos extranjeros viviendo en la ciudad de Siem Reap, hay aceptable vida nocturna y muchas opciones gastronómicas.";
  ciudad = "Siem Reap"
  map = "https://www.google.com.ar/maps/embed?pb=!1m18!1m12!1m3!1d3994180.3103236738!2d102.73541645006655!3d12.141770919194856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCamboya!5e0!3m2!1ses!2sar!4v1624224530031!5m2!1ses!2sar"

  content = [
    {
      contentImg: '/assets/images/countries/camboya/camboya-pic (7).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'Los camboyanos siempre comen arroz. Sea lo que sea que comen, lo acompañan con arroz. La comida generalmente está muy buena, aunque hubo cosas que me dieron esa sensacion horrible y traté de evitar ciertos condimentos. Le ponen picante a todo (incluso los niños) y generalmente la comida tiene salsa de pescado. La salsa de pescado es rica, pero tu casa no vuelve a oler nunca como antes.',
    },
    {
      contentImg: '/assets/images/countries/camboya/camboya-pic (18).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'No tardé mas de un día en tener mi propia bici y fue la compra que mas amorticé en mi vida, aunque en la temporada de lluvia había que recurrir a los tuk-tuk para ir a trabajar. Son muy cómodos y rápidos, hay apps para llamar con el teléfono y se puede vincular con Google Maps.',
    },
    {
      contentImg: '/assets/images/countries/camboya/camboya-pic (8).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'La gente es mayormente budista y suele haber templos alrededor de la ciudad. Tienen un estilo particular y generalmente se encuentran en el mismo predio que el cementerio para los monjes, como en la foto.',
    },
    {
      contentImg: '/assets/images/countries/camboya/camboya-pic (9).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'La herencia de los tiempos de Angkor Wat está muy presente entre la gente. Imágenes como la del tallado de la foto generalmente son la imagen de marcas de comida, locales de ropa, etc.',
    },
  ]

  contentTur = [
    {
      contentImgTur: '/assets/images/countries/camboya/camboya-pic (25).jpeg',
      contentAltTur: 'Playa',
      contentPTur: 'En el sur del país estan las islas Koh Rong y Koh Rong Sanloem, tan paradisíacas como se lo ve en la foto. Estas dos islas tienen una belleza natural similar a las islas de Tailandia (aunque sin tanta fauna marina para apreciar haciendo snorkel) pero a una escala menor. Se llega con un barco (una hora) desde la ciudad de Sihanoukville. Lo difícil es irse.',
    },
    {
      contentImgTur: '/assets/images/countries/camboya/camboya-pic (17).jpeg',
      contentAltTur: 'Mercado central',
      contentPTur: 'Phnom Penh es la capital y la mayor ciudad del país. Es una ciudad con mucho tráfico y gente, y su mercado central tiene una arquitectura particular. Es necesario pasar por los puestos, sacar fotos, y apreciar la cúpula central con su reloj.',
    },
    {
      contentImgTur: '/assets/images/countries/camboya/camboya-pic (13).jpeg',
      contentAltTur: 'Ruinas de Angkor',
      contentPTur: 'Las ruinas de Angkor Wat son el motivo principal para hacer turismo en Camboya. Una ciudad milenaria, abandonada, perdida en el tiempo y encontrada por casualidad, combina la historia con la naturaleza, volviendo a su lugar.',
    },
  ]

  contentHis = [
    {
      contentImgHis: '/assets/images/countries/camboya/camboya-pic (27).jpeg',
      contentAltHis: 'Amanecer en Angkor Wat',
      contentPHis: 'En su máximo esplendor, se estima que en la ciudad de Angkor vivían alrededor de un millon de personas, convirtiéndola en una de las mas grandes del mundo en su época.',
	  },
    {
      contentImgHis: '/assets/images/countries/camboya/camboya-pic (28).jpeg',
      contentAltHis: 'Templo Bayon',
      contentPHis: 'No solo asombra el estado de conservacion, sino tambien la cantidad de templos conservados. El espacio que ocupan las ruinas visitables hoy es mayor al de la ciudad de Siem Reap. El templo Bayon es mundialmente conocido por tener sus esculturas de Buda.',
	  },
    {
      contentImgHis: '/assets/images/countries/camboya/camboya-pic (37).jpeg',
      contentAltHis: 'Celdas de prision',
      contentPHis: 'La historia mas reciente sin embargo está aun mas presente en la sociedad: los años posteriores a la guerra de Vietnam fueron una pesadilla para el pais: un régimen autoritario asesinó alrededor de dos millones de personas en cuatro años, lo que (se estima) en ese momento representaba un cuarto de la población.',
	  },
    {
      contentImgHis: '/assets/images/countries/camboya/camboya-pic (38).jpeg',
      contentAltHis: 'Campo de concentración',
      contentPHis: 'En las fotos se puede ver uno de los campos de concentración mas conocidos, que antes funcionaba como una escuela primaria. Queda ubicado en la ciudad de Phnom Penh (la capital del pais) e incluso se puede hablar con sobrevivientes, que generalmente se encuentran en el lugar.',
	  },
  ]

  contentCos = [
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (19).jpeg',
      contentAltCos: 'Granja de cocodrilos',
      contentPCos: 'Siento que no puedo empezar esta sección de otra manera: COCODRILOS. En la ciudad de Siem Reap es común encontrarse con granjas de cocodrilos. De hecho, la granja de la foto estaba literalmente frente a mi casa. La piel y la carne son importantes para la economía del lugar. La gente comenta casos de tragedias hogareñas entre los hijos de los dueños de estas granjas y sus habitantes, elijo no creer...',
	  },
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (30).jpeg',
      contentAltCos: 'Caminata de monjes',
      contentPCos: 'Periódicamente se podían ver este tipo de celebraciones en las calles. Este tipo de eventos generalmente integraban a los monjes de las pagodas locales y a los niños de las escuelas.',
	  },
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (20).jpeg',
      contentAltCos: 'Planisferio versión Asia',
      contentPCos: 'Dentro de esas pequeñas gigantes diferencias, incluso el planisferio está al revés del nuestro. De esta manera, asia queda en el centro del cuadro.',
	  },
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (6).jpeg',
      contentAltCos: 'Amok en proceso',
      contentPCos: 'El plato tradicional de Camboya es el Amok. El Amok puede ser servido con pescado, pollo o simplemente vegetariano. La salsa es una mezcla de especias (generalmente locales), con salsa de pescado, leche de coco, verduras rebanadas, y hojas de una planta muy amarga, que no había probado hasta el momento. Es muy rico, y obviamente se come con arroz',
	  },
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (15).jpeg',
      contentAltCos: 'Gallinas comiendo arroz',
      contentPCos: 'La mayor parte del país sigue siendo rural y es común ver a las familias producir su propio arroz. Este es el procedimiento que hacen para secarlo. Y es costumbre de las gallinas robarles el arroz antes de que los perros las espanten.',
	  },
    {
      contentImgCos: '/assets/images/countries/camboya/camboya-pic (34).jpeg',
      contentAltCos: 'Funeral luminoso',
      contentPCos: 'Los casamientos y los funerales suelen ser las actividades sociales mas convocantes: en medio de la calle se instala una carpa y durante tres o cinco días se realiza la celebración. La música está al máximo desde las 6 AM hasta las 9 PM. Uno de mis mayores dolores de la vida en Camboya es no poder transmitir realmente lo que implica que te instalen una carpa de casamiento o funeral en la puerta de tu casa. ',
	  },
  ]

  contentNat = [
    {
      contentImgNat: '/assets/images/countries/camboya/camboya-pic (21).jpeg',
      contentAltNat: 'Escorpión en el baño',
      contentPNat: 'En plena noche en el baño me encontré con el escorpión este. Lo empujé para afuera con una escoba y el tipo se defendía con el aguijón. Además se movía rapidísimo. '
	  },
    {
      contentImgNat: '/assets/images/countries/camboya/camboya-pic (26).jpeg',
      contentAltNat: 'Bicho hoja',
      contentPNat: 'En la isla Koh Rong Sanloem, en el sur del país, encontré al eslabon que une al reino animal con el reino vegetal. Todavía me pregunto si es una hoja o un insecto.'
	  },
    {
      contentImgNat: '/assets/images/countries/camboya/camboya-pic (24).jpeg',
      contentAltNat: 'Columna de murciélagos',
      contentPNat: 'A las seis de la tarde, en los alrededores de Battambang, se pueden ver cientos de miles de murciélagos salir a cenar. En la foto se puede ver la columna de murciélagos volando, interminable. Ese día aprendí que los murciélagos son el principal predador de los mosquitos, y ahí los quise un poco mas.'
	  },
    {
      contentImgNat: '/assets/images/countries/camboya/camboya-pic (1).jpeg',
      contentAltNat: 'Víbora bebé',
      contentPNat: 'La planta de Loto crece como yuyo en todo el país. En su temporada de flores se pueden ver campos enteros florecidos. Es una flor sagrada para los budistas, ademas de ser hermosa y sus semillas nutritivas.'
	  },
    {
      contentImgNat: '/assets/images/countries/camboya/camboya-pic (36).jpeg',
      contentAltNat: 'Plaga de loto',
      contentPNat: 'La planta de Loto crece como yuyo en todo el país. En su temporada de flores se pueden ver campos enteros florecidos. Es una flor sagrada para los budistas, ademas de ser hermosa y sus semillas nutritivas.'
	  },
	 ]

   contentFot = [
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (2).jpeg',
      contentAltFot: 'Casita con muchos árboles',
      contentPFot: 'En la ciudad de Siemp Reap no existen muchos edificios de más de dos pisos, lo que hacía que la vista desde la terraza de mi casa fuera espectacular. En la terraza estaba la máquina de lavar la ropa, así que subía seguido y aprovechaba la vista.'
	  },
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (10).jpeg',
      contentAltFot: 'Peces comiendo',
      contentPFot: 'Durante la cuarentena me propuse armar un estanque para el dueño de la casa donde alquilaba. Es comun encontrarse con pequeños o grandes estanques con peces de colores, y con muchas plantas..'
	  },
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (11).jpeg',
      contentAltFot: 'Invitación de casamiento',
      contentPFot: 'Me invitaron al casamiento de una compañera del colegio, a unos 50km de la ciudad donde vivía. Fue un evento muy lindo, colorido y con platos que no había probado hasta ese momento. Esta es la invitación al casamiento.'
	  },
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (12).jpeg',
      contentAltFot: 'Mujer con sus búfalos',
      contentPFot: 'A la vuelta de un paseo en moto por las afueras de la ciudad, me encontré con esta señora, que había había llevado a los búfalos a bañarse.'
	  },
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (16).jpeg',
      contentAltFot: 'El mono y yo',
      contentPFot: 'Al menos en esta oportunidad pidió "por favor". Generalmente se te cuelgan de la mochila para revisarte, y por mas que sean hermosos y parecen buenitos, si hay comida a la vista, hay que estar con cuidado'
	  },
    {
      contentImgFot: '/assets/images/countries/camboya/camboya-pic (35).jpeg',
      contentAltFot: 'Casa local',
      contentPFot: 'En los alrededores de la ciudad, se ven barrios completos con casas de madera, generalmente levantada del suelo con columnas de madera o concreto. Hasta hace no muchas décadas, toda esa zona era campos de arroz, que suelen estar hundidos en el suelo por la necesidad de agua. Esta es una típica casita en mi barrio.'
	  }, 
]

  ngOnInit(): void {

  }

}
