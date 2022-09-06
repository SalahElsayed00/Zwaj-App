using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZwajApp.Api.Models;

namespace ZwajApp.Api.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user , string Password);

        Task<User> Login(string userName , string Password);

        Task<bool> UserExists(string userName); 
    }
}