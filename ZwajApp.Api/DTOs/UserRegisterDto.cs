using System.ComponentModel.DataAnnotations;

namespace ZwajApp.Api.DTOs
{
    public class UserRegisterDto
    {
        [Required(ErrorMessage = "يجب ادخال اسم المستخدم")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "يجب ادخال الرقم السري")]
        //[StringLength(maximumLength:4,MinimumLength =2,ErrorMessage ="password invalid")]
        public string Password { get; set; }
    }
}