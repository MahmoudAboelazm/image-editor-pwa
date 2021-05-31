module.exports = {
  plugins: [require("daisyui")],
  important: true,
  theme: {
    maxWidth: {
      "1/4": "20%",
      "1/2": "50%",
      "3/4": "75%",
    },
  },
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx"],
    options: {
      safelist: [/data-theme$/],
    },
  },

  darkMode: false,
  //purge: ["./src/**/*.tsx"],

  daisyui: {
    themes: ["synthwave", "halloween"],
    styled: true,
    themes: true,
    resets: true,
    utils: true,
    logs: true,
    // rtl: false,
  },

  // theme: {
  //   typography: (theme) => ({
  //     default: {
  //       css: {
  //         color: theme("colors.gray.900"),

  //         a: {
  //           color: theme("colors.blue.500"),
  //           "&:hover": {
  //             color: theme("colors.blue.700"),
  //           },
  //         },
  //       },
  //     },

  //     dark: {
  //       css: {
  //         color: theme("colors.gray.100"),

  //         a: {
  //           color: theme("colors.blue.100"),
  //           "&:hover": {
  //             color: theme("colors.blue.100"),
  //           },
  //         },
  //       },
  //     },
  //   }),
  // },
  // variants: {
  //   typography: ["white"],
  // },
  // variants: {
  //   extend: {
  //     textOpacity: ["dark"],
  //   },
  // },
};
