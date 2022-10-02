using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using ZwajApp.Api.Data.Repository;
using ZwajApp.Api.DTOs;

namespace ZwajApp.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IZwajRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IZwajRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet()]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var returnUsers = _mapper.Map<IEnumerable<UserListDto>>(users);
            return Ok(returnUsers);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            if (user == null) return NotFound();
            var returnUser = _mapper.Map<UserDetailsDto>(user);
            return Ok(returnUser);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserEditDto userEditDto)
        {
            if (id != int.Parse( User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var user = await _repo.GetUser(id);
            _mapper.Map(userEditDto, user);
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"حدثت مشكلة اثناء تعديل البايانات الخاصة بك");
        }
    }
}
