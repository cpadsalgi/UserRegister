import { Component, OnInit } from '@angular/core';

import { UserService} from '../shared/user.service'
import { ToastrService } from 'ngx-toastr'
import { User } from '../shared/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchTerm: string;
  constructor(private userService : UserService,private toastr : ToastrService) { }
  
  ngOnInit() {
    this.userService.getUserList();
  }
  showForNewUSer()
  {
    this.userService.selectedUser =null;
    this.userService.showvar = !this.userService.showvar;
  }

  showForEdit(usr : User)
  {
    //console.log (this.userService.showvar) ;
    if(!this.userService.showvar)
    this.userService.showvar = !this.userService.showvar;

    this.userService.selectedUser = Object.assign({},usr);;

  }
  onDelete(id : number)
  {
    if(confirm("Are you sure to delete this record ?")==true)
    {
        this.userService.deleteUser(id)
        .subscribe( x => {
          this.userService.getUserList();
          this.toastr.warning('deleted Sucessfully','User deleted');
        })
    }   
    

  }

}
