using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TA.Startup))]
namespace TA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
