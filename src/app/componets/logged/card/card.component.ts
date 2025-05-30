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
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() platform: string = '';
  @Input() gender: string = '';
  @Input() ageClassification: string = '';
  @Input() backgroundImage: string = '';
  @Input() realeseDate: string = '';
}
