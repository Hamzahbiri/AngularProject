import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private AuthService:AuthentificationService, private ngZone: NgZone, private router:Router) {
    
  }
  signIn() {
    this.AuthService.doGoogleLogin().then( () => {
      this.successRedirect();
      
    })
  }

  successRedirect() {
    this.AuthService.getUserProfile().then(profile => {
            this.ngZone.run(() => {
        console.log('test'+profile.displayName)
        this.router.navigate(['/menu'], { state: { profile } });
      });
    });
  }

}
