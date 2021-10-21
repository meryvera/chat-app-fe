import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket = io('http://localhost:3000',{
    withCredentials: true,
    //autoConnect: true //cuando esta se cree se conectara automaticament
  })
  constructor() {

  }
}
