using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Ohishi.Data;
using Ohishi.Models;
using ZLogger;

namespace Ohishi.Commands;

public class ServeCommand : ConsoleAppBase
{
    private readonly ILogger<ServeCommand> _logger;
    private readonly ApplicationDbContext _db;

    public ServeCommand(ILogger<ServeCommand> logger, ApplicationDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    [Command("serve", "Boot up the web server")]
    public void Serve()
    {
        _logger.ZLogInformation("Web server started");
        var host = CreateHostBuilder().Build();
        InitializeDatabase(host);

        host.Run();
    }

    [Command("foo", "Perform a test command")]
    public async Task Foo([Option("b", "example option")] int bar)
    {
        // example structured log
        _logger.ZLogCriticalWithPayload(new {same = 123}, "I love memes: {0}, {1}", "bar", bar);
        // var blog = new Blog { Url = "dankmeme.xd" };
        // var post = new List<Post> { new Post { Content = "XDD", Title = "aaaaaaa" } };
        // blog.Posts = post;
        // _db.Blogs.Add(blog);
        // await _db.SaveChangesAsync();
        var result = await _db.Blogs
            .Include(b => b.Posts)
            .OrderBy(b => b.Id)
            .FirstAsync();
        _logger.ZLogInformation("result: {0}", result.Posts.First().Title);
    }

    private void InitializeDatabase(IHost host)
    {
        using var scope = host.Services.CreateScope();
        var services = scope.ServiceProvider;
        try
        {
            var context = services.GetRequiredService<ApplicationDbContext>();
            context.Database.EnsureCreated();
            // DbInitializer.Initialize(context);
        }
        catch (Exception ex)
        {
            _logger.ZLogError(ex, "An error occurred creating the DB.");
        }
    }

    private IHostBuilder CreateHostBuilder()
    {
        return Host
            .CreateDefaultBuilder()
            .ConfigureWebHostDefaults(webBuilder => webBuilder.UseStartup<Startup>());
    }
}
