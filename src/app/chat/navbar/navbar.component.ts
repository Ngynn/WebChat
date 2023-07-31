import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UserService } from '../services/user.service';
import { FriendshipService } from '../services/friendship.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
}
