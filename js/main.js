// A call to require() to load all the scripts you need and any init work you want to do for the page. 
// This main.js script loads two plugins, jquery.js, bootstrap 
// The plugins should be in the same directory as require-jquery.js

require.config({
  paths: {
    // Major libraries
    jquery: 'libs/jquery',
    //underscore: 'libs/underscore', // https://github.com/amdjs
    //backbone: 'libs/backbone/backbone', // https://github.com/amdjs
    bootstrap: 'libs/bootstrap',

    // Require.js plugins
    //text: 'libs/require/text',
    //order: 'libs/require/order',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: 'templates'
  }

});