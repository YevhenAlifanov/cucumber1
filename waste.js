let webdriver = require('selenium-webdriver');
let By = webdriver.By;
let until = webdriver.until;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://google.com');

driver.findElement(By.css('input')).sendKeys('user@email.com');

driver.findElement(By.className('gNO89b")')).click();
