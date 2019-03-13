const scope = require('./scope');

module.exports = {
  goto: async (url = '') => {
    if (!scope.browser) {
      scope.browser = await scope.driver.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,
        slowMo: 2,
      });
    }
    let current = scope.context.currentPage;
    if (!scope.context.currentPage) {
      scope.context.currentPage = await scope.browser.newPage();
      current = scope.context.currentPage;
      current.setViewport({ width: 1600, height: 1024 });
      current.setDefaultNavigationTimeout(10000);
    }

    const visit = await scope.context.currentPage.goto(url, { timeout: 8000, waitUntil: 'networkidle0' });

    return visit;
  },
};
