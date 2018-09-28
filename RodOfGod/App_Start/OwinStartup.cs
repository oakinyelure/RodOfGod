
using Microsoft.Owin;
using Owin;
using RodOfGod;
using System.Web.Http;

[assembly: OwinStartup(typeof(OwinStartup))]
namespace RodOfGod
{

    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
            app.UseWebApi(config);
        }
    }
}