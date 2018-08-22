using MediatR;
using RodOfGod.DataContexts;
using RodOfGod.Models.Blog;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RodOfGod.Handlers.Blog
{
    public class GetAllBlogsHandler : IRequestHandler<GetAllBlogsRequest, GetAllBlogsResponse>
    {
        public async Task<GetAllBlogsResponse> Handle(GetAllBlogsRequest request, CancellationToken cancellationToken)
        {
            var response = new GetAllBlogsResponse();

            using (var context = new RogDBContext())
            {
                var blog = context.Blogs.Select(b => new BlogList()
                {
                    BlogId = b.BlogID,
                    BlogPost = b.BlogPost,
                    BlogTypeId = b.BlogTypeID,
                    CreateDate = b.CreateDate
                });

                response.Blogs = await blog.ToListAsync(cancellationToken);
            }

            return response;
        }
    }

    public class GetAllBlogsResponse
    {
        public List<BlogList> Blogs { get; set; }
    }

    public class GetAllBlogsRequest : IRequest<GetAllBlogsResponse>
    {
    }

}