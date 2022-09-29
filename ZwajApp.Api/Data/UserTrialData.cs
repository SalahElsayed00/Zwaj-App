using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using ZwajApp.Api.Models;

namespace ZwajApp.Api.Data
{
    public class UserTrialData
    {
        private readonly ApplicationDbContext _context;

        public UserTrialData(ApplicationDbContext context)
        {
            _context = context;
        }

        public void dataTrial()
        {
            var userData = File.ReadAllText("Data/UserFackData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            
            users.ForEach(user =>
            {
                byte[] passwordSalt, passwordHash;
                CreateHashPassword("password", out passwordHash, out passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.UserName = user.UserName.ToLower();
                _context.Users.Add(user);
            });

            _context.SaveChanges();
        }
        public void CreateHashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hMac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hMac.Key;
                passwordHash = hMac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
