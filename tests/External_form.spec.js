
import { test} from '@playwright/test'; 

test('External_form', async({page})=>{
    await page.goto('https://peopleservices--hrsit.sandbox.my.site.com/s/external-queries')
    await page.getByPlaceholder('Please enter your email address').fill('gt1@tcs.woolworths.com.au')

}); 