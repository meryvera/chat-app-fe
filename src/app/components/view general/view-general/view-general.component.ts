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

  constructor(
    private router: Router,
    private socketService: SocketService,
    private chatBoxService: ChatBoxService,
    ) {
    }

  ngOnInit(): void {
    // console.log(this.socketService.socket)
    // console.log(this.socketService.socket.disconnected)
    this.socketService.socketConnect();
    this.chatBoxService.onReceiveMessage();


  }

  ngOnDestroy(): void {
    this.socketService.socket.disconnect();
  }

  logOut(){
    //window.reload;

    localStorage.removeItem('newToken');
    // this.socketService.socket.disconnected = true;
    // this.socketService.socket.connected = false;

    // this.socketService.socket.on('disconnect', (reason) => {
    //   console.log(reason)
    // });

    //this.socketService.socket.disconnect();
    // const socket = io({
    //   query: { token: 'cde' }
    // });
    // socket.on("disconnect", () => {
    //   socket.connect();
    // });

    // else the socket will automatically try to reconnect
    this.router.navigate(['/login']);


   // console.log(this.socketService.socket)

  }

}
