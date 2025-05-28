import { Component } from '@angular/core';
import { HeaderComponent } from "../../../componets/not-logged/header/header.component";
import { SignUpFormComponent } from "../../../componets/not-logged/sign-up-form/sign-up-form.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HeaderComponent, SignUpFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
