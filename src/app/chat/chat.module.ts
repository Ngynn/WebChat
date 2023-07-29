import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ChatControlComponent } from './chat-control/chat-control.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    ChatComponent,
    UserInfoComponent,
    FriendListComponent,
    ChatControlComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
