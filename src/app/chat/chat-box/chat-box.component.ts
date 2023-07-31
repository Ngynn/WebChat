import { Component, Input,  } from '@angular/core';
import { FriendShip } from 'src/app/models/friendship';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  friendship: FriendShip | null = null;

  @Input() set _friendship(friendship: FriendShip | null) {
    this.friendship = friendship;
    this.messageService.listenMessages(friendship?.conversationId ?? '');
    console.log(friendship);
  }

  myEmail = '';

  constructor(
    private userService: UserService,
    public messageService: MessageService
  ) {
    this.userService.userInfo.subscribe((user) => {
      this.myEmail = user?.email ?? '';
    });
   
    // setTimeout(() => {
    //   console.log(this.friendship);
    //   this.messageService.listenMessages(this.friendship?.conversationId ?? '');
    // }, 1000);
  }
}
