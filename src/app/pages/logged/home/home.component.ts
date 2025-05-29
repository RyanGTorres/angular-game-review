import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../componets/logged/header/header.component';
import { CardComponent } from '../../../componets/logged/card/card.component';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../models/game.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    });
  }
}
