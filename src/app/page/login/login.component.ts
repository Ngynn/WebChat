import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      constructor(private loginService: LoginService, private router: Router ) {}

      async login() {
        let loginResult = await this.loginService.loginWithGoogle();
        if(loginResult == null) {
          console.log("Faild");
        } else {
          console.log("Success");
          this.router.navigate(['/chat']);
          
        }
      } 

}
