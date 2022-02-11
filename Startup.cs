using Hangfire;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Ohishi.Data;
using StackExchange.Redis;
using VueCliMiddleware;

namespace Ohishi;

public class Startup
{
    const int Port = 8080;
    private IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        var connectionString = Configuration.GetConnectionString("DefaultConnection");
        services.Configure<RouteOptions>(options => options.LowercaseUrls = true);
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlite(connectionString));
        services.AddControllersWithViews();

        // for production
        services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "frontend/dist";
        });

        services.AddHangfire(configuration =>
        {
            configuration.UseRedisStorage(
                ConnectionMultiplexer.Connect(Configuration.GetConnectionString("Redis"))
            );
        });
        services.AddHangfireServer();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseSpaStaticFiles();
            app.UseExceptionHandler("/Error");
        }

        app.UseStaticFiles();
        app.UseHangfireDashboard();

        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        app.UseSpa(spa =>
        {
            spa.Options.SourcePath = "frontend";
            if (!env.IsDevelopment())
            {
                return;
            }

            spa.UseVueCli("dev", Port, forceKill: true, https: false);

            // Manual proxy - start the dev server manually
            // spa.UseProxyToSpaDevelopmentServer($"http://localhost:{port}");
        });
    }
}
