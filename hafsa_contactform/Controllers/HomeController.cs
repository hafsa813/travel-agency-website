using Microsoft.AspNetCore.Mvc;
using hafsa_contactform.Models;

namespace hafsa_contactform.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
           
            return View();
        }

        
        [HttpPost]
        public IActionResult SubmitForm(string name, string email, string phone)
        {
            
            ViewBag.Message = $"Form submitted! Name: {name}, Email: {email}, Phone: {phone}";

            
            return View("Index");
        }
    }
}
