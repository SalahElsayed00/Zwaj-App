using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ZwajApp.Api.DTOs
{
    public class UserRegisterDto
    {
        [Required(ErrorMessage ="يجب ادخال اسم المستخدم")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="يجب ادخال الرقم السري")]
        //[StringLength(maximumLength:4,MinimumLength =2,ErrorMessage ="password invalid")]
        public string Password { get; set; }
    }
}