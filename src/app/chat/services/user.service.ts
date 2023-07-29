import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, user } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from 'src/app/models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: BehaviorSubject<UserInfo|null> = new BehaviorSubject(null);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) =>{
      console.log(user);
      if(user) {
        this.userInfo.next
      }
      
    },(error) => {
      console.log(error);
    });
   }
}
