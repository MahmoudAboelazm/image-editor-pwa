const withPWA = require("next-pwa");
const withImages = require("next-images");
module.exports = withImages(
  withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }),
);
