import { Component, OnInit, ɵProvidersFeature } from '@angular/core';

import {UserService} from './shared/user.service'
import { ProvidersFeature } from '@angular/core/src/render3';
import { COMPILER_PROVIDERS } from '@angular/platform-browser-dynamic/src/compiler_factory';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
  
})
export class UsersComponent implements OnInit {

  showvar:boolean = false;
  
  constructor(private userService : UserService) { }

  ngOnInit() {
  }
  
}
