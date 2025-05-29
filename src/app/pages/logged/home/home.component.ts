import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../componets/logged/header/header.component';
import { CardComponent } from '../../../componets/logged/card/card.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

