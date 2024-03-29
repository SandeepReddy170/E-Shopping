import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, private router: Router){ 
    auth.user$.subscribe(user => {
      if(user) {
        userService.save(user);
        
       let returnUrl = localStorage.getItem('returnUrl');
       if(returnUrl){
         localStorage.removeItem('returnUrl');
         router.navigateByUrl(returnUrl);
       }
      }
    });
  }
  
}
