import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UserService } from '../services/user.service';
import { FriendshipService } from '../services/friendship.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
    @Input() user: UserInfo |null= {
      id: 'id-111',
      name: 'long',
      email: 'test@gmail.com',
      avatarUrl: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/350790326_922761112139524_6748686218138110121_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jSQeaTavX0AAX8MH_4f&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCL9sB6Mcuw1Q9KhjnAlvwbsJT1SDACtXO9JhqrnW2zSQ&oe=64C8F288'
    }

    constructor(
      public userService: UserService,
      public friendshipService: FriendshipService,
    ){}

    async addFriend() {
      let yEmail = prompt('Enter your f-email');
      if(yEmail) {
        if(this.user == null) {
          return;
        }
        let result = await this.friendshipService.addFriendship(
          this.user!.email,
          yEmail
        );
        if(result) {
          alert('Add friend success');
        }else {
          alert('Add friend failed');
        }
      }
    }
}
