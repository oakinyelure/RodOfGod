using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RodOfGod.Models.User
{
    public class User
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessage = "The {0} must be at leat {2} chareacters long. ", MinimumLength = 8)]
        public string Password { get; set; }

        [Required]
        [Compare("Password",ErrorMessage = "The password does not match")]
        public string ConfirmPassword { get; set; }
    }
}