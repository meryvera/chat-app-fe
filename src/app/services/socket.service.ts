import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any ;
  

  constructor() {
    this.socket = {};

  }


  socketConnect(){
    this.socket = io('http://localhost:3000',{
      withCredentials: true,
      autoConnect: true, //cuando esta se cree se conectara automaticament
      extraHeaders: { Authorization: `Bearer ${localStorage.getItem('newToken')}` }
    })
  
  }

}
