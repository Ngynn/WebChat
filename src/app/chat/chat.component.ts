import { Component, Input } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { FriendShip } from '../models/friendship';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() user: UserInfo |null= {
    id: 'id-111',
    name: 'long',
    email: 'test@gmail.com',
    avatarUrl: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/350790326_922761112139524_6748686218138110121_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jSQeaTavX0AAX8MH_4f&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCL9sB6Mcuw1Q9KhjnAlvwbsJT1SDACtXO9JhqrnW2zSQ&oe=64C8F288'
  }
  
  
  friendship: FriendShip | null = null;
  
  constructor(public userService: UserService, public router: Router){
    this.userService.userInfo.subscribe((user) => {
      if(user == null) {
        this.router.navigate([('/login')]);
      }
    });
  }

  selectFriend($event: FriendShip) {
    console.log($event);
    this.friendship = $event;
    
  }
}
