using System;

namespace RodOfGod.Exceptions.Blog
{
    public class CreateBlogException: Exception
    {
        public CreateBlogException(Exception inner): base($"Error creating blog; inner: {inner}")
        {

        }
    }
}