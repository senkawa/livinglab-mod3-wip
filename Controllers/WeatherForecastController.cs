using System;
using System.Collections.Generic;
using System.Linq;
using Hangfire;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Ohishi.Jobs;
using Ohishi.Models;

namespace Ohishi.Controllers;

[ApiController]
[Route("api/weather-forecast")]
public class WeatherForecastController : ControllerBase
{
    public string[] Summaries = {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };


    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet("later/{id:int}")]
    public IActionResult Later(int id)
    {
        BackgroundJob.Enqueue<ExampleBackgroundJob>(x => x.Dispatch(id));
        return Ok(new { test = 123 });
    }

    [HttpGet("now")]
    public IEnumerable<WeatherForecast> Get()
    {
        var rng = new Random();
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = rng.Next(-20, 55),
            Summary = Summaries[rng.Next(Summaries.Length)]
        })
            .ToArray();
    }
}
