'use strict';

var browser = require('detect-browser');

module.exports = function(){
  return browser.name === 'safari' && typeof cordova === 'undefined';
};