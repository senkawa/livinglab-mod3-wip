using System;
using Cysharp.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Ohishi.Commands;
using Ohishi.Data;
using ZLogger;

var builder = ConsoleApp.CreateBuilder(args);
builder.ConfigureLogging(log =>
{
    log.ClearProviders();
    log.SetMinimumLevel(LogLevel.Trace);
    log.AddZLoggerConsole(options =>
    {
        var prefixFormat = ZString.PrepareUtf8<LogLevel, DateTime>("{0}\t{1}\t");
        options.PrefixFormatter = (writer, info) =>
            prefixFormat.FormatTo(ref writer, info.LogLevel, info.Timestamp.DateTime.ToLocalTime());
    });

    log.AddZLoggerFile("app.log",
        options => { options.EnableStructuredLogging = true; }); // add ZLogger file output
});

builder.ConfigureServices((ctx, services) =>
{
    var connectionString = ctx.Configuration.GetConnectionString("DefaultConnection");
    services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(connectionString));
});

var app = builder.Build();
app.Services.GetRequiredService<ApplicationDbContext>().Database.EnsureCreated();

// add more commands as needed
app.AddCommands<ServeCommand>();
// app.AddSubCommands<ServeCommand>();

app.Run();
