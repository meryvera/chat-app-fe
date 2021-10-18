import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})

export class ChatBoxService {

  chats = Array();

  constructor(private socket:SocketService) { 
    //ahora necesito que cuando esta clase se inicialice el socket esté escuchando
    this.onReceiveMessage();
  }

  sendMessage(messageInfo: any){
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo)
  }

  onReceiveMessage(){
    this.socket.io.on("receiveMessage", (messageInfo)=>{
      messageInfo.messageType = 2;
      this.chats.push(messageInfo)
    })
  }
}
