import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app-fe';
  prueba:any;
  
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }
  getMessage() {
    // this.prueba = this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
    // console.log(this.prueba);
    return this.socket.fromEvent('chat message').pipe(map((data:any) => data.msg));
  }
}
