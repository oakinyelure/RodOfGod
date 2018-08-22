using System;

namespace RodOfGod.Models.Blog
{
    public class BlogList
    {
        public int BlogId { get; set; }

        public int BlogTypeId { get; set; }

        public string BlogPost { get; set; }

        public DateTime CreateDate { get; set; }


    }
}