import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  io = io('http://localhost:3000',{
    withCredentials: true,
    autoConnect: true, //cuando esta se cree se conectara automaticament
    extraHeaders: { Authorization: `Bearer ${localStorage.getItem('newToken')}` }
  })
  constructor() {
    // el cliente emite eventos hacia el servidor 
    // this.io.emit('chat message', {msg:'Hola Kathy Angular'})
    // this.io.on('chat message',(objet)=>{
    //   alert(objet.msg)
    // })
  }
}
