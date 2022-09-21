using System.ComponentModel.DataAnnotations;

namespace ZwajApp.Api.DTOs
{
    public class UserLoginDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}