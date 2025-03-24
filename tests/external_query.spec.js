import { test, expect } from '@playwright/test';

const email=JSON.parse(JSON.stringify(require('../input_datas/test.json')));
test("Verify whether a case is created in the external query form when selecting the following options Woolworths AU, Former Team Member, raising a case for someone else -Yes, Is this a new request- as Yes ",async({page})=>{


await page.goto('https://peopleservices--wowpsuat.sandbox.my.site.com/s/external-queries');

await page.fill('input[inputmode="email"]', email.email);
await page.click('[class="brand-button"]');


await page.getByRole('button', { name: 'Verify OTP' }).click();

await page.click('//*[text()="Woolworths AU"]');
await page.click('//*[text()="Former Team Member"]');
await page.locator('//*[text()="Yes"]').waitFor({ state: 'visible' });
await page.click('//*[text()="Yes"]');
await page.getByRole('button', { name: 'Start Query' }).click();
await page.locator('//*[@data-id="Is this a new request?"]//div//span[1]//label').click();

await page.getByRole('textbox', { name: '*Their First Name' }).fill('giri');
await page.getByRole('textbox', { name: '*Their Last Name' }).fill('t');


await page.getByRole('textbox', { name: '*Their Date of Birth' }).fill('05/05/2012');
await page.waitForTimeout(2000);
await page.pause();
await page.locator('//*[@data-id="Do you know their Payroll ID?"]//div//span[text()="Yes"]').click();
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Their Payroll ID' }).waitFor({ state: 'visible' });
await page.getByRole('textbox', { name: 'Their Payroll ID' }).fill('1379746');

await page.getByRole("button",{name:"Next"}).click();


await page.getByText('Send me Certificate of service').click();
await page.getByText('Send me Last 3 payslips').click();
await page.getByText('Send me Separation certificate ie. reason for leaving').click();
await page.getByText('Send me Payment summaries').click();
// await page.screenshot({path: 'screenshot.png'});
await page.getByText('Other - I can provide more information if required').click();

await page.getByRole('textbox', { name: '*Payment Summary Details' }).fill('test');
// await page.screenshot({ path: 'fullpage-screenshot.png', fullPage: true });

await page.getByRole('textbox', { name: '*Please enter details below' }).fill('test');
await page.waitForTimeout(5000)
await page.click('//*[text()="Submit"]');
})