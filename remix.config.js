/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: [".*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.mjs",
  publicPath: "/build/",
  devServerPort: 8002,
  serverModuleFormat: "esm",
  target: "es2020",
  future: {
    unstable_dev: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
