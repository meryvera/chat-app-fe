import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chat: any = [];
  
  constructor( private socketService: SocketService) {
    this.onReceiveMsg();
  }

  // evento para emitir un msn
  sendMsg(message: any){
    this.chat.push(message);
    this.socketService.io.emit('sendMessage',message);
  }

  // ahora se necesita crear un evento que escuche
  onReceiveMsg(){
    this.socketService.io.on('receiveMessage', (message) =>{
      this.chat.push(message);
    })
  }

}
