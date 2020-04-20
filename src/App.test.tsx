import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://www.localhost:3000');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('p')).sendKeys('Edit', Key.ENTER);

        let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    } finally {
        driver.quit();
    }
})();


