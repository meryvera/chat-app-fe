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
      // client.filter(( e: any )=> e.userID);
      //this.plusOneItem(client)

      // this.socketConnectedUsers.push(client);
      // console.log(this.socketConnectedUsers)
      var result =  client.map((e: any) => {  

        return e.userID;

      }).filter( (e: any) => {
        let arrayUnique = new Set(e.userID);
        console.log(arrayUnique)
        let uniqueUsersArray = [...arrayUnique]
        return uniqueUsersArray;
      });
      console.log(result)

      this.client = client.map(( e: any )=> e.userID);


      this.uniqueUsers = new Set(this.client);
      this.uniqueUsersArray = [...this.uniqueUsers]

      for (let obj of client) {
        this.userIdItem = this.uniqueUsersArray.filter(( userId: any) => { userId === obj.userID  } )
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
