({
  mainConfigFile: 'src/public/js/main.js',
  modules: [
    {
      name: "main",
      include: ["backbone.marionette"]
    }
  ],
  dir: "target/built-files/js",

  optimize: "uglify",

  inlineText: true,
  useStrict: true,

  skipPragmas: false,
  fileExclusionRegExp: /^workers\/*/,
  preserveLicenseComments: true,
  logLevel: 0
})

