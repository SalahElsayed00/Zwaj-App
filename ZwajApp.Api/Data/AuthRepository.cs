using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZwajApp.Api.Models;

namespace ZwajApp.Api.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ApplicationDbContext _context;
        public AuthRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string userName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == userName);
            if (user == null) return null;

            if (!vreifyPasswordHash(password, user.PasswordSalt, user.PasswordHash))
                return null;

            return user;
        }

        private bool vreifyPasswordHash(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using (var hMac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var newHashPasword = hMac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < newHashPasword.Length; i++)
                {
                    if (newHashPasword[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        public async Task<User> Register(User user, string Password)
        {
            byte[] passwordHash, paswordSalt;
            CreateHashPassword(Password, out passwordHash, out paswordSalt);
            user.PasswordSalt = paswordSalt;
            user.PasswordHash = passwordHash;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public void CreateHashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hMac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hMac.Key;
                passwordHash = hMac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }

        }

        public async Task<bool> UserExists(string userName)
        {
            if(await _context.Users.AnyAsync(u=>u.UserName==userName)) return true;
            return false;
        }
    }
}