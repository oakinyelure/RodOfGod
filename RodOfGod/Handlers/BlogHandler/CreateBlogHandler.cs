using Autofac.Extras.NLog;
using MediatR;
using RodOfGod.DataContexts;
using RodOfGod.Exceptions.Blog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace RodOfGod.Handlers.BlogHandler
{
    public class CreateBlogHandler : IRequestHandler<CreateBlogRequest, CreateBlogResponse>
    {
        private readonly ILogger _logger;

        public CreateBlogHandler(ILogger logger)
        {
            _logger = logger;
        }

        public async Task<CreateBlogResponse> Handle(CreateBlogRequest request, CancellationToken cancellationToken)
        {
            using (var context = new RogDBContext())
            {
                var newBlog = context.Blogs.Add(new DataContexts.Blog()
                {
                    BlogPost = request.BlogPost,
                    BlogTypeID = request.BlogTypeId,
                    CreateDate = request.CreateDate
                });

                try
                {
                    await context.SaveChangesAsync(cancellationToken);
                }
                catch(Exception ex)
                {
                    _logger.Error($"Error creating new blog; Request: {request}; Exception: {ex}");
                    throw new CreateBlogException(ex);
                }
            }
            return new CreateBlogResponse();
        }
    }

    public class CreateBlogResponse
    {
        
    }

    public class CreateBlogRequest: IRequest<CreateBlogResponse>
    {
        public string BlogPost { get; set; }

        public int BlogTypeId { get; set; }

        public DateTime CreateDate { get; set; }
    }
}