using Autofac.Extras.NLog;
using MediatR;
using RodOfGod.DataContexts;
using RodOfGod.Exceptions.Blog;
using System;
using System.Threading;
using System.Threading.Tasks;

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
            var response = new CreateBlogResponse();

            using (var context = new RogDBContext())
            {
                var newBlog = context.Blogs.Add(new DataContexts.Blog()
                {
                    BlogPost = request.BlogPost,
                    BlogTypeID = request.BlogTypeId,
                    CreateDate = DateTime.Now
                });

                try
                {
                    await context.SaveChangesAsync(cancellationToken);
                    response.BlogId = newBlog.BlogID;
                    response.BlogPost = newBlog.BlogPost;
                    response.BlogTypeID = newBlog.BlogTypeID;
                    response.CreateDate = newBlog.CreateDate;
                    
                }
                catch(Exception ex)
                {
                    _logger.Error($"Error creating new blog; Request: {request}; Exception: {ex}");
                    throw new CreateBlogException(ex);
                }
            }
            return response;
        }
    }

    public class CreateBlogResponse
    {
        public int BlogId { get; set; }

        public string BlogPost { get; set; }

        public int BlogTypeID { get; set; }

        public DateTime CreateDate { get; set; }
    }

    public class CreateBlogRequest: IRequest<CreateBlogResponse>
    {
        public string BlogPost { get; set; }

        public int BlogTypeId { get; set; }

        public DateTime CreateDate { get; set; }
    }
}