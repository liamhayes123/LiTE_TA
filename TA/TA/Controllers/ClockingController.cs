using System.Web.Mvc;
using TA.Models;

namespace TA.Controllers
{
    [Authorize(Roles = "NurseryWorker")]
    public class ClockingController : Controller
    {
        // GET: Clocking
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Start()
        {
            Clocking.Action(Clocking.ClockStatus.Start);
            return Json(new { success = "true" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult LunchStart()
        {
            Clocking.Action(Clocking.ClockStatus.LunchStart);
            return Json(new { success = "true" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult LunchEnd()
        {
            Clocking.Action(Clocking.ClockStatus.LunchEnd);
            return Json(new { success = "true" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult End()
        {
            Clocking.Action(Clocking.ClockStatus.End);
            return Json(new { success = "true" }, JsonRequestBehavior.AllowGet);
        }
    }
}