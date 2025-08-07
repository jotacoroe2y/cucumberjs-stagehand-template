import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import z from "zod";
import {TIME} from "../../constants/time";

setDefaultTimeout(TIME.twentySecsInMs);

Given("I navigate to Google", async function () {
    await this.stageHand.page.goto('https://www.google.com/');
});

When('I {string}', async function (action: string) {
    await this.stageHand.page.act(action);
});

When('I wait for the page to be loaded', async function () {
    await this.stageHand.page.waitForLoadState('domcontentloaded');
});

When('I see the {string}', async function (whatToObserve: string) {
    const observations = await this.stageHand.page.observe({
        instruction: `Find the ${whatToObserve} on this page`
    });
    expect(observations.length).toBeGreaterThan(0);
});

Then("I should see the {string} is {string}", async function (whatToExtract: string, whatToExpect: string) {
    const result = await this.stageHand.page.extract({
        instruction: `extract the ${whatToExtract}`,
        schema: z.object({
            link: z.string().url(),
            locator: z.string().describe('put here the xpath of the extracted element'),
        }),
    });

    expect(result.link).toMatch(whatToExpect);
});
