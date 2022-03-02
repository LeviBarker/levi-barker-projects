import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {User} from '@firebase/auth-types';
import { take } from 'rxjs/operators';
import { AuthUtilService } from 'src/services/auth-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Firebase Manager';
  authInitialized: boolean = false;

  constructor(public auth: AngularFireAuth, private authUtil: AuthUtilService) {
    auth.user.pipe(take(1)).subscribe({
      complete: () => this.authInitialized = true
    });
  }

  async signInWithGoogle(){
    await this.authUtil.signInWithGoogle();
  }

  async signOut(){
    await this.authUtil.signOut();
  }
}
