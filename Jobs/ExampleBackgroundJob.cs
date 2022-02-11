using System;
using Microsoft.Extensions.Logging;

namespace Ohishi.Jobs;

public class ExampleBackgroundJob
{
    private readonly ILogger<ExampleBackgroundJob> _logger;

    public ExampleBackgroundJob(ILogger<ExampleBackgroundJob> logger)
    {
        _logger = logger;
    }

    public void Dispatch(int id)
    {
        Console.WriteLine($"received job with {id}");
    }
}
