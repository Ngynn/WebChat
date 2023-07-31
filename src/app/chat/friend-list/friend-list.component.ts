import { Component, Output, EventEmitter } from '@angular/core';
import { FriendShip } from 'src/app/models/friendship';
import { UserService } from '../services/user.service';
import { user } from '@angular/fire/auth';
import { FriendshipService } from '../services/friendship.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
    friendList: Array<FriendShip> = [];
    @Output() selectedFriend: EventEmitter<FriendShip> = new EventEmitter();

    constructor(public userService: UserService, public friendshipService: FriendshipService){
      this.userService.userInfo.subscribe((user) => {
        if(user == null) {
          return;
        }
        this.friendshipService.getFriendList(user?.email??'');
      });

      this.friendshipService.friendList.subscribe((friendship) => {
        if(friendship == null) {
          return;
        }
        if(!this.friendList.map((f) => f.friendEmail).includes(friendship.friendEmail) ){
          this.friendList.push(friendship);
        }
      });
    }

    chatWith(friendship: FriendShip) {
        console.log(friendship);
        this.selectedFriend.emit(friendship);
    }
}
