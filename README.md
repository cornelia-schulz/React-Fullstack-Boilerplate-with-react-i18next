# react.i18next Sample Project

# yarn
$ yarn add react-i18next i18next i18next-browser-languagedetector i18next-xhr-backend
$ yarn add -D @alienfast/i18next-loader

# webpack.config.js
add the following to the webpack.config.js file
    {
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      // options here
      //query: { overrides: [ '../node_modules/lib/locales' ] }
    }

# i18n.js
Create i18n.js file to configure storage of language files and initialise i18next

# string.json
Language files should be stored as json inside the public folder in a folder called locales

# index.json
Include i18n in index.js

# components
Update components with text to use {t("stringname")}

