import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoomsAdmin(){
    this.router.navigate(['admin', 'rooms']);
  }

  navigateToUsersAdmin(){
    this.router.navigate(['admin', 'users']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

}
