import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // Dados mockados para desenvolvimento
  private mockGames: Game[] = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
      gender: 'Action-Adventure',
      img_url: 'assets/games/zelda-botw.jpg',
      indicative_rating: '10',
      platform: 'Nintendo Switch',
      release_date: new Date('2017-03-03'),
      developer_id: 1
    },
    {
      id: 2,
      name: 'God of War Ragnarök',
      gender: 'Action-Adventure',
      img_url: 'assets/games/god-of-war.jpg',
      indicative_rating: '18',
      platform: 'PS5',
      release_date: new Date('2022-11-09'),
      developer_id: 2
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
      gender: 'Action-Adventure',
      img_url: 'assets/games/rdr2.jpg',
      indicative_rating: '18',
      platform: 'PS4/Xbox One/PC',
      release_date: new Date('2018-10-26'),
      developer_id: 3
    }
  ];

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(this.mockGames);
  }

  getGameById(id: number): Observable<Game | undefined> {
    return of(this.mockGames.find(game => game.id === id));
  }
} 