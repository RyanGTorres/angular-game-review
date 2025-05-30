import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../componets/logged/header/header.component';
import { CardComponent } from '../../../componets/logged/card/card.component';
import { RouterLink } from '@angular/router';
import { Game } from '../../../interfaces/game';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  games: Game[] = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      realeseDate: '2017-03-03',
      platform: 'Nintendo Switch',
      rating: '10',
      gender: 'Action-Adventure',
      backgroundImage: '/images/fundosgames/zelda.png',
      ageClassification: '12+'
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      realeseDate: '2018-10-26',
      platform: 'PlayStation 4',
      rating: '10',
      gender: 'Action-Adventure',
      backgroundImage: '/images/fundosgames/RDR2.png',
      ageClassification: '18+'
    },
    {
      id: 3,
      title: 'God of War',
      realeseDate: '2018-04-20',
      platform: 'PlayStation 4',
      rating: '9.5',
      gender: 'Action',
      backgroundImage: '/images/fundosgames/RDR2.png',
      ageClassification: '18+'
    },
    {
      id: 4,
      title: 'Cyberpunk 2077',
      realeseDate: '2020-12-10',
      platform: 'PC',
      rating: '8.5',
      gender: 'RPG',
      backgroundImage: '/images/fundosgames/zelda.png',
      ageClassification: '18+'
    }
  ];
}

