import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Game } from '../../../interfaces/game';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-create-game',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  novoJogo: Partial<Game> = {
    name: '',
    platform: '',
    gender: '',
    releaseDate: new Date(),
    imgUrl: '',
    indicativeRating: ''
  };

  constructor(private gameService: GameService, private router: Router) {}

  criarJogo() {
    this.gameService.criarJogo(this.novoJogo as Game).subscribe({
      next: () => {
        console.log('Jogo criado com sucesso');
        this.router.navigate(['/']);
      },
      error: err => console.error('Erro ao criar jogo', err)
    });
  }
}
