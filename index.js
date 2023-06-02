const { Builder, By } = require('selenium-webdriver');
require("chromedriver");
require('dotenv').config('');

const array = ['Software Developer at Paytm', 'Software Developer at Razorpay', 'Software Developer at Cred'];

(async function helloSelenium() {
	let driver = await new Builder().forBrowser('chrome').build();

	await driver.get('https://www.linkedin.com');

	let title = await driver.getTitle();

	// let Email-or-Phone = await driver.findElement(By.name('email-or-phone'));

	let Username = await driver.findElement(By.name('session_key'));

	await Username.sendKeys(`${process.env.USERNAME}`);

	let Password = await driver.findElement(By.name('session_password'));

	await Password.sendKeys(`${process.env.PASSWORD}`);

	let submitButton = await driver.findElement(By.className('sign-in-form__submit-btn--full-width'));

	await submitButton.click();
	// The functionality of the both the statements are same on line number 14 & 16

	// await driver.manage().setTimeouts({ implicit: 100000 });

	setTimeout(async () => {
		await driver.quit();
	}, 500000)

})();