import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ChatControlComponent } from './chat-control/chat-control.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ChatComponent,
    UserInfoComponent,
    FriendListComponent,
    ChatControlComponent,
    ChatBoxComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
