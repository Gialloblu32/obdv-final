import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camboya',
  templateUrl: './camboya.component.html',
  styleUrls: ['./camboya.component.css']
})
export class CamboyaComponent implements OnInit {

  constructor() { }

  content = [
    {
      contentImg: '/assets/images/camboya-pic (2).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'Viví en Camboya un año y medio. Llegué en marzo de 2019 después de unos meses de viaje por Asia, y me fuí en agosto de 2020, <span class="bold">en medio del caos por la pandemia del coronavirus.</span> Antes de llegar, yo tenía amigos viviendo en la ciudad de Siem Reap, lo que hizo mas facil para entender algunas cosas del lugar. Trabajé en algunos lugares como profesor de inglés part-time y en una escuela trabajé full-time en segundo, tercero y cuarto grado, incluso en los meses en que la escuela estuvo cerrada por cuarentena, ya que seguí dándo clases online. Mi casa quedaba a unos diez minutos en bici del centro. El lugar contaba con diez casitas, un lindo parque y una pileta que conservaba el agua a temperatura para el mate durante todo el dia. En Camboya hacer calor. La gente es copada, alegre y generalmente se interesan por saber un poco mas de vos. Por mas que casi nadie hable inglés, con señas y buena voluntad, es posible entenderse. Hay muchos extranjeros viviendo en la ciudad de Siem Reap, hay aceptable vida nocturna y muchas opciones gastronómicas.',
    },
    {
      contentImg: '/assets/images/camboya-pic (7).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'Los camboyanos siempre comen arroz. Sea lo que sea que comen, lo acompañan con arroz. La comida generalmente está muy buena, aunque hubo cosas que me dieron esa sensacion horrible y traté de evitar ciertos condimentos. Le ponen picante a todo (incluso los niños) y generalmente la comida tiene salsa de pescado. La salsa de pescado es rica, pero tu casa no vuelve a oler nunca como antes.',
    },
    {
      contentImg: '/assets/images/camboya-pic (18).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'No tardé mas de un día en tener mi propia bici y fue la compra que mas amorticé en mi vida, aunque en la temporada de lluvia había que recurrir a los tuk-tuk para ir a trabajar. Son muy cómodos y rápidos, hay apps para llamar con el teléfono y se puede vincular con Google Maps.',
    },
    {
      contentImg: '/assets/images/camboya-pic (8).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'La gente es mayormente budista y suele haber templos alrededor de la ciudad. Tienen un estilo particular y generalmente se encuentran en el mismo predio que el cementerio para los monjes, como en la foto.',
    },
    {
      contentImg: '/assets/images/camboya-pic (9).jpeg',
      contentAlt: 'Alkjhgfdt',
      contentP: 'La herencia de los tiempos de Angkor Wat está muy presente entre la gente. Imágenes como la del tallado de la foto generalmente son la imagen de marcas de comida, locales de ropa, etc.',
    },
  ]

  ngOnInit(): void {
  }

}
