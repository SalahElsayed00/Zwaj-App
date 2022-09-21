using System.Collections.Generic;
using System.Threading.Tasks;
using ZwajApp.Api.Models;

namespace ZwajApp.Api.Data.Repository
{
    public interface IZwajRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int Id);

    }
}
