using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace DataLayer
{
    public class UserRepository
    {
        
        private DBModel db = new DBModel();

        
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

       
        
        public User GetUser(int id)
        {
            User user = db.Users.Find(id);

            return user;
        }

        
        
        public User PutUser(int id, User user)
        {


            if (id != user.User_ID)
            {
                return null;
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return user;
        }

        
      
        public bool PostUser(User user)
        {

            db.Users.Add(user);
            db.SaveChanges();

            return true;
        }

  
        
        public bool DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return false;
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return true;
        }



        
        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.User_ID == id) > 0;
        }
    }
}
