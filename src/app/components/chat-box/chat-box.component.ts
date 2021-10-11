import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { ChatService } from 'src/app/services/chat-service.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  
  // textBox = new FormGroup({
  //   text: new FormControl(''),
  // });
  text: any = "";

  constructor(
    private socketService: SocketService,
    private chatService: ChatService
    ) { }

  ngOnInit(): void {
  }

  sendMessage() {
    //this.socketService.io.emit('chat message', msg);
    let messageInfo = {
      text: this.text.value,
      messageType: 1
    };
    this.chatService.sendMsg(messageInfo);
    this.text.value = [];
  }
  // getMessage() {
  //   // this.prueba = this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
  //   // console.log(this.prueba);
  //   return this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
  // }

}
