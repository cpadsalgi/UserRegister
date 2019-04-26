import { Component, OnInit } from '@angular/core';
import{ NgForm} from '@angular/forms'

import { UserService} from '../shared/user.service'
import { ToastrService } from 'ngx-toastr'
import { from } from 'rxjs';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private userService : UserService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form? : NgForm){
    if (form!= null)
    form.reset();
    this.userService.selectedUser ={
      User_ID : null,
      FirstName : '',
      LastName : '',
      Age : null,
      Address : '',
      Interest : '',
      ImageUrl : '',
    } 

  }

  onSelectFile(file :FileList)
  {
    this.userService.selectedImageFile = file[0];
  }
  closeForm()
  {
    this.resetForm();
    this.userService.showvar = !this.userService.showvar;
  }

  onSubmit(form : NgForm){
    if(form.value.User_ID == null && form.value.FirstName!= null && form.value.LastName!= null && form.value.Age!= null )
    {
      if(this.userService.selectedImageFile !=null)
        form.value.ImageUrl =this.userService.selectedImageFile.name;
        
      this.userService.postUser(form.value )
      .subscribe( data =>{
        this.resetForm(form);
        this.userService.getUserList();
        this.toastr.success('New Record Added Sucessfully','User Register');
      })
     // if(this.userService.selectedImageFile.name!='')
     // {
     //   this.userService.postUserImage(form.value.User_ID,this.userService.selectedImageFile)
       // .subscribe( data =>{
        //  this.resetForm(form);
         // this.userService.getUserList();
       //   this.toastr.success('New User image Added Sucessfully','User Register');
       // })
     // }
    }
    else
    {
      this.userService.putUser(form.value.User_ID, form.value)
      .subscribe( data =>{
        this.resetForm(form);
        this.userService.getUserList();
        this.toastr.success(' Record has been updated Sucessfully','User Register');
      })
    }

    this.userService.showvar = !this.userService.showvar;

  }
}
