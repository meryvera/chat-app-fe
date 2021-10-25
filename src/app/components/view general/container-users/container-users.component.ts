import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.scss']
})
export class ContainerUsersComponent implements OnInit {
  
  // socketConnectedUsers:Array<any>=[];
  client:any;
  uniqueUsers: any;
  uniqueUsersArray: any;
  productItem: any;
  userIdItem: any;


  constructor(private socketService:SocketService) {
    
  }

  ngOnInit(): void {
    this.socketService.socket.on("connectedUsers", (client: any)=>{

      //this.plusOneItem(client)

      // this.socketConnectedUsers.push(client);
      // console.log(this.socketConnectedUsers)
      console.log(client.filter(( e: any )=> e.userID));
      console.log(client)

      this.client = client.map(( e: any )=> e.userID);


      this.uniqueUsers = new Set(this.client);
      this.uniqueUsersArray = [...this.uniqueUsers]
      console.log(this.uniqueUsersArray.filter(( e: any )=> e.userID));


      for (let obj of client) {
        console.log(obj.userID)
      this.userIdItem = this.uniqueUsersArray.filter(( userId: any) => {
        console.log(userId)
        userId === obj.userID
        
      } )
        
      }

      // client.filter( (obj: any)=> { 
      //   obj.userID === this.uniqueUsersArray
      // }) 
      
      console.log(this.uniqueUsersArray)

    })
  }

  
  // plusOneItem(client: any){
  //   this.productItem = this.productItem.map((el: any)=>{
  //     if (el.userID === client.userID) {
  //       console.log(el.userID)
  //     }else if (el.userID != client.userID ) {
  //       let index = this.productItem.indexOf(client)
  //       this.productItem.splice(index, 1)
  //     }
  //     return el
  //   })

  // ngOnChanges(): void {
  //   this.socketService.socket.on("connectedUsers", (client: any)=>{
  //     // this.socketConnectedUsers.push(client);
  //     // console.log(this.socketConnectedUsers)
  //     this.client = client;
  //   })
  // }
}
