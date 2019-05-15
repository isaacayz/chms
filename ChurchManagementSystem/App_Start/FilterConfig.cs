using System.Web;
using System.Web.Mvc;

namespace ChurchManagementSystem
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
