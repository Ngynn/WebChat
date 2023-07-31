import { Injectable } from '@angular/core';
import { Firestore , collection, query, onSnapshot, where, doc} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { FriendShip } from 'src/app/models/friendship';
import { addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  constructor(private firestore: Firestore) { }

  friendList: BehaviorSubject<FriendShip | null> = new BehaviorSubject<FriendShip | null>(null);

  async addFriendship(xEmail:string, yEmail:string): Promise<boolean>{
    let friendshipCollection = collection(this.firestore, 'friendships');
    let friendship = {
      xEmail: xEmail,
      yEmail: yEmail,
      conversationId: Date.now(),
    };
    try {
      await addDoc(friendshipCollection, friendship);
      return true;
    }catch(error){
      console.log(error);
      return false;
      
    }

  }
  async getFriendList(myEmail: string) {
    let friendshipCollection = collection(this.firestore, 'friendships');
    let q1 = query(friendshipCollection, where('xEmail', '==', myEmail));
    onSnapshot(q1, (snapshot) =>{
      snapshot.docs.map((doc) =>{
        let friendship = doc.data() as FriendShip;
        friendship.friendEmail = friendship.yEmail;
        this.friendList.next(friendship);
      });
    });

    let q2 = query(friendshipCollection, where('yEmail', '==', myEmail));
    onSnapshot(q2, (snapshot) => {
      snapshot.docs.map((doc) => {
        let friendship = doc.data() as FriendShip;
        friendship.friendEmail = friendship.xEmail;
        this.friendList.next(friendship);
      });
    });
  }
  
}
