using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.Identity;
using TA.Models;

namespace TA.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult List()
        {
            ApplicationUserManager userManager = HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            IQueryable<ApplicationUser> users = userManager.Users;
            BootGrid gridData = new BootGrid(-1, users.Count(), users.ToList(), users.Count());
            return Json(gridData);
        }
    }
}