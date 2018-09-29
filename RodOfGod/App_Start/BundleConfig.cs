using System.Web;
using System.Web.Optimization;

namespace RodOfGod
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/AngularBundles/ScriptBundle").Include(
                "~/AngularBundles/runtime.*",
                "~/AngularBundles/polyfills.*",
                "~/AngularBundles/vendor.*",
                "~/AngularBundles/main.*"
                ));

            bundles.Add(new Bundle("~/AngularBundles/StyleBundle").Include("~/AngularBundles/styles.*"));

            bundles.Add(new ScriptBundle("~/AngularBundles/jquery").Include(
           "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/AngularBundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/AngularBundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/AngularBundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/AngularBundles/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
