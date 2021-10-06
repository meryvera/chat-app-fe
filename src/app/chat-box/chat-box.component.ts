import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  title = 'chat-app-fe';
  prueba:any;

  constructor(private socket: Socket) { }

  ngOnInit(): void {
  }

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }
  getMessage() {
    // this.prueba = this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
    // console.log(this.prueba);
    return this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
  }

}
