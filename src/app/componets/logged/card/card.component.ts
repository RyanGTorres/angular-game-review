import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() platform: string = '';
  @Input() gender: string = '';
  @Input() indicativeRating: string = '';
  @Input() imgUrl: string = '';
  @Input() releaseDate: Date = new Date();
  @Output() deleted = new EventEmitter<void>();

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  deletarJogo() {
    if (confirm(`Tem certeza que deseja deletar o jogo "${this.name}"?`)) {
      this.gameService.deletarJogo(this.id).subscribe({
        next: () => {
          console.log('Jogo deletado com sucesso');
          this.deleted.emit();
          // Navega para a mesma rota, forçando um refresh
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/']);
          });
        },
        error: (erro) => {
          console.error('Erro ao deletar jogo:', erro);
        }
      });
    }
  }
}
