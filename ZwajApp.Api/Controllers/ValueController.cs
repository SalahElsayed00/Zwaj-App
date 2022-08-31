using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZwajApp.Api.Data;

namespace ZwajApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValueController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ValueController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> getvalue()
        {
            var val = await _context.Values.ToArrayAsync();
            return Ok(val);
        }
    }
}