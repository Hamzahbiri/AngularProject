import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 2 })),
      ]),
    ]),
  ],

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
