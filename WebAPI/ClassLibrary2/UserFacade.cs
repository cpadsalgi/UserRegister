using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer;
using DataLayer.Models;

namespace ServiceLayer
{
    public class UserFacade
    {
        UserRepository userRepository = new UserRepository();
        

        public List<User> GetUsers()
        {
            return userRepository.GetUsers().ToList();
        }

        public User PutUser(int id, User user)
        {
            return userRepository.PutUser(id, user);
        }

        public bool PostUser(User user)
        {
            return userRepository.PostUser(user);
        }

        public bool DeleteUser(int id)
        {
            return userRepository.DeleteUser(id);
        }
    }
}
