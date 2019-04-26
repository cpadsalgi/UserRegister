using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using ServiceLayer;
using DataLayer.Models;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestUSerIDFirstNameLastName_PutUser()
        {
            UserFacade userFacade = new UserFacade();
            User usr = new User
            {
                User_ID = 1,
                FirstName = "",
                LastName = "sham"
            };
            try
            {
                userFacade.PutUser(1, usr);
            }
            catch (Exception e)
            {
                StringAssert.Contains(e.Message, "invalid user id or missing first name or lastname");
                return;
            };
            Assert.Fail("no Exception was thrown");
        }

        [TestMethod]
        public void TestDeleteUser()
        {
            UserFacade userFacade = new UserFacade();

            userFacade.DeleteUser(53);

            foreach (User usr in userFacade.GetUsers())
            {
                if (usr.User_ID == 53)
                {
                    Assert.Fail("no Exception was thrown");
                    return;
                }
            }

        }
    }
}
