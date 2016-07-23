using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TA.Models
{
    public class Clocking
    {
        public enum ClockStatus
        {
            Start = 0,
            LunchStart = 1,
            LunchEnd = 2,
            End = 2,
        }

        public static void Action(ClockStatus status)
        {

        }
    }
}