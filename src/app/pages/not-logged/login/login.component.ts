import { Component } from '@angular/core';
import { HeaderComponent } from '../../../componets/not-logged/header/header.component';
import { LoginFormComponent } from '../../../componets/not-logged/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
