import { Component, OnInit, Input  } from '@angular/core';
import { ChatBoxService } from 'src/app/services/chat-box.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  
  @Input() item: any;

  prueba:any;
  text:string;

  constructor(public chat: ChatBoxService) {
    this.text = "";
  }

  ngOnInit(): void {
  }

  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    //una vez q tngo el objeto creado voy a usar el ss creado:
    this.chat.sendMessage(messageInfo);
    this.text = "";
  }

}
