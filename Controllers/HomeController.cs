using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Ohishi.Controllers;

[Route("example")]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [Route("override")]
    public IActionResult Privacy()
    {
        return View();
    }
}
