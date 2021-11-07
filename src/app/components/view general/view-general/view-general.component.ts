import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { ChatBoxService } from 'src/app/services/chat-box.service';

@Component({
  selector: 'app-view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.scss']
})
export class ViewGeneralComponent implements OnInit {
  userName: any;
  items:any;

  constructor(
    private router: Router,
    private socketService: SocketService,
    private chatBoxService: ChatBoxService,
    ) {
      this.items={};
    }

  ngOnInit(): void {
    this.socketService.socketConnect();
    this.chatBoxService.onReceiveMessage();
    this.socketService.socket.on("userName", (client: any)=>{
      this.userName = client;
     })
    this.privateChatParent;
  }

  ngOnDestroy(): void {
    this.socketService.socket.disconnect();
  }

  logOut(){
    localStorage.removeItem('newToken');
    this.router.navigate(['/login']);
  }

  privateChatParent(newItem: any) {
    this.items = newItem;
    console.log('44',this.items);
  }

}
