using Autofac.Extras.NLog;
using MediatR;
using RodOfGod.Handlers.Blog;
using System;
using System.Threading.Tasks;
using System.Web.Http;

namespace RodOfGod.Controllers
{
    [RoutePrefix("api/Blog")]
    public class BlogController : ApiController
    {
        private readonly ILogger _logger;
        private readonly IMediator _mediator;

        public BlogController(ILogger logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetAllBlogs")]
        public async Task<IHttpActionResult> GetAllBlogs()
        {
            try
            {
                var request = new GetAllBlogsRequest();
                var response = await _mediator.Send(request);
                return Ok(response);
            }
            catch(Exception ex)
            {
                _logger.Error($"Error Fetching blogs; Request: {Request}");
                return InternalServerError(ex);
            }

        }
    }
}
