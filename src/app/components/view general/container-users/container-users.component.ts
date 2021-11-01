import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.scss']
})
export class ContainerUsersComponent implements OnInit {
  
  @Output() privateChat = new EventEmitter<any>();
  
  clients:any;

  constructor(private socketService:SocketService) {  
  }

  ngOnInit(): void {
    this.socketService.socket.on("connectedUsers", (client: any)=>{
      console.log(client);     
      this.clients = client;   
    })
  }

  privateChatChild(value: any) {
    this.privateChat.emit(value);
  }

}
