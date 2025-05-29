import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() platform: string = '';
  @Input() rating: string = '';
  @Input() gender: string = '';
  @Input() isTop10: boolean = false;  
  @Input() backgroundImage: string = '';
}
