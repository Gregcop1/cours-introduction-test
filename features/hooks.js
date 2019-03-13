const { After, AfterAll } = require('cucumber');
const { scope } = require('./support');

After(async () => {
  if (scope.context.currentPage) {
    await scope.context.currentPage.close();
    scope.context.currentPage = null;
  }
});

AfterAll(async () => {
  if (scope.browser) {
    await scope.browser.close();
  }
});
