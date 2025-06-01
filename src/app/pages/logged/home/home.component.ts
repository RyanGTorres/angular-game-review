import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../componets/logged/header/header.component';
import { CardComponent } from '../../../componets/logged/card/card.component';
import { RouterLink } from '@angular/router';
import { Game } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.carregarJogos();
  }

  carregarJogos() {
    this.gameService.listarJogos().subscribe({
      next: (jogos) => {
        this.games = jogos;
      },
      error: (erro) => {
        console.error('Erro ao carregar jogos:', erro);
      }
    });
  }
}

