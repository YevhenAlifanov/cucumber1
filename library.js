const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert").strict;

(async function link(){
let driver = await new Builder().forBrowser('chrome').build()
driver.manage().window().maximize();
try {
await driver.get('http://google.com');

await driver.findElement(By.name('q')).sendKeys('rozetka', Key.ENTER);
await driver.findElement(By.xpath('(//a[@href="https://rozetka.com.ua/"])[1]')).click();

await driver.wait(until.elementLocated(By.xpath('(//a[@href="https://rozetka.com.ua/computers-notebooks/c80253/"])[2]/..'),3000)).click();
await driver.wait(until.elementLocated(By.xpath("//h1")),3000)
let xxx = await driver.findElement(By.xpath('//h1')).isDisplayed();
let exp = false
 assert.strictEqual(exp, xxx , 'zalupa')
} finally {
    await driver.quit();
  }
}) ();
