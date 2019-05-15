using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ChurchManagementSystem.Startup))]
namespace ChurchManagementSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
