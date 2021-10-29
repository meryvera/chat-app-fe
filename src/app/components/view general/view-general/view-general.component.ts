import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { io } from 'socket.io-client';
import { ChatBoxService } from 'src/app/services/chat-box.service';

@Component({
  selector: 'app-view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.scss']
})
export class ViewGeneralComponent implements OnInit {
  userName: any;


  constructor(
    private router: Router,
    private socketService: SocketService,
    private chatBoxService: ChatBoxService,
    ) {
    }

  ngOnInit(): void {
    this.socketService.socketConnect();
    this.chatBoxService.onReceiveMessage();
    this.socketService.socket.on("userName", (client: any)=>{
      this.userName = client;
     })
  }

  ngOnDestroy(): void {
    this.socketService.socket.disconnect();
  }

  logOut(){
    localStorage.removeItem('newToken');
    this.router.navigate(['/login']);
  }

  privateChat(){
    console.log('componente papá');
    
  }

  items = ['item1'];
  currentItem = 'Television';
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
