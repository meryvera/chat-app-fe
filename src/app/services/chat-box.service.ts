import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})

export class ChatBoxService {

  chats = Array();

  constructor(private socketService:SocketService) { 
    //ahora necesito que cuando esta clase se inicialice el socket esté escuchando
    // this.onReceiveMessage();
  }

  sendMessage(messageInfo: any){
    this.chats.push(messageInfo);
    this.socketService.socket.emit("sendMessage", messageInfo)
  }

  onReceiveMessage(){
    this.socketService.socket.on("receiveMessage", (messageInfo: any)=>{
      messageInfo.messageType = 2;
      this.chats.push(messageInfo)
    })
  }

  receiveMessagePrivate(){
    this.socketService.socket
  }

}
