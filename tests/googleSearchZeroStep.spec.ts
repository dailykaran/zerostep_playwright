import { expect, test } from '../tests/testWithFixture'
import { ai } from '@zerostep/playwright'

test.describe('GitHub', () => {
    
    test.only('Serach a domain in the google', async({page, ai}) => {
        await page.goto('https://www.amazon.in/', { waitUntil: 'load'} );
        await ai(`Click in the search box`,);
        await ai('type smart mobile in the search box',);
        await ai(`press Enter`,);
        await page.waitForLoadState('load', {timeout: 5000});
        await page.waitForTimeout(3000);
        await ai(`Click the Samsung mobile under Results`,);
        await page.waitForTimeout(1000);
    })

})
