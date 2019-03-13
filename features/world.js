const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const { scope } = require('./support');

const World = function() {
  scope.context = {};
  scope.driver = puppeteer;
};

setWorldConstructor(World);
