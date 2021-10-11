import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  io = io('http://localhost:3000',{
    withCredentials: true,
    autoConnect: true //cuando esta se cree se conectara automaticament
  });
  
    /* params:any;
      user:Object; */


  constructor() {
    /* this.params = new URLSearchParams(window.location.search);

        if(!this.params.has('name')){
          this window.location = 'login.component.html';
          throw new Error('El nombre es necesario')
        };

        this.user = {
          name: this.params.get('name')
        }
 */

    // // el cliente emite eventos hacia el servidor 
    // this.io.emit('chat message', {msg:'Hola Kathy Angular'})
    // this.io.on('chat message', (objet)=>{ //mensaje que viene desde el BE 
    //   alert(objet.msg)
    // })
  }
}
