const { Builder, By, Key } = require('selenium-webdriver');
require("chromedriver");
require('dotenv').config('');

const array = ['Software Developer at Paytm', 'Software Developer at Razorpay', 'Software Developer at Cred'];

async function automation() {
	let driver = await new Builder().forBrowser('chrome').build();

	await driver.get('https://www.linkedin.com');

	let title = await driver.getTitle();

	// let Email-or-Phone = await driver.findElement(By.name('email-or-phone'));

	try {
		let Username = await driver.findElement(By.name('session_key'));
		await Username.sendKeys(`${process.env.USERNAME}`);
	} catch (error) {
		let Username = await driver.findElement(By.name('email-or-phone'));
		await Username.sendKeys(`${process.env.USERNAME}`);
	}

	try {
		let Password = await driver.findElement(By.name('session_password'));
		await Password.sendKeys(`${process.env.PASSWORD}`);
	} catch (error) {
		let Password = await driver.findElement(By.name('password'));
		await Password.sendKeys(`${process.env.PASSWORD}`);
	}


	let submitButton = await driver.findElement(By.className('sign-in-form__submit-btn--full-width'));

	await submitButton.click();

	let Query = await driver.findElement(By.className('search-global-typeahead__input'));

	await Query.sendKeys(array[0]);

	await driver.actions().keyDown(Key.ENTER).perform();

	let People = await driver.findElement(By.className('app-aware-link'));

	console.log(People);


	// The functionality of the both the statements are same on line number 14 & 16

	// await driver.manage().setTimeouts({ implicit: 100000 });

	setTimeout(async () => {
		await driver.quit();
	}, 500000)

};

automation().then((data) => {
	console.log(data);
}).catch((error) => {
	console.log(error);
});