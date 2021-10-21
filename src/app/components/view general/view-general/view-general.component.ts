import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.scss']
})
export class ViewGeneralComponent implements OnInit {

  constructor(
    private router: Router,
    private socketService: SocketService
    ) { }

  ngOnInit(): void {
    this.socketService.socket
  }

  logOut(){
    console.log('salióoooo yeyyy');
    localStorage.removeItem('newToken');
    this.router.navigate(['/login']);
  }
}
