# react.i18next Sample Project

# yarn
$ yarn add react-i18next i18next i18next-browser-languagedetector i18next-xhr-backend
$ yarn add -D @alienfast/i18next-loader

add the following to the webpack.config.js file
    {
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      // options here
      //query: { overrides: [ '../node_modules/lib/locales' ] }
    }

Create i18n.js file to configure storage of language files and initialise i18next

Language files should be stored as json inside the public folder in a folder called locales

Include i18n in index.js

Update html components with text to use {t("stringname")} in components

