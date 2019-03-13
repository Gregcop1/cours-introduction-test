const { Given, When, Then } = require('cucumber');
const { navigation, scope } = require('../support');
const searchPage = require('../pages/search');
const expect = require('expect');

Given('I go to search engine page', async () => {
  await navigation.goto(searchPage.urls.default);
});

When('I fill the search form', async () => {
  const page = scope.context.currentPage;
  await page.focus(searchPage.selectors.searchField);
  await page.keyboard.type(searchPage.values.search);
  await page.click(searchPage.selectors.submitButton);
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
});

Then('I should see a list of websites', async () => {
  const page = scope.context.currentPage;
  const results = await page.$$(searchPage.selectors.results);
  expect(results.length).toBeGreaterThan(0);
});
