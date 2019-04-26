import {Pipe, PipeTransform } from '@angular/core';
import { User } from './shared/user.model';

@Pipe({
   name : 'userFilter'
})
export class UsersFilterPipe implements PipeTransform{
    transform(usrs : User[], searchTerm : string ): User[]{
        if( !usrs || !searchTerm){
            return usrs;
        }
        return usrs.filter(
                user => (user.FirstName.toLowerCase()+ ' ' +user.LastName.toLowerCase()).indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
