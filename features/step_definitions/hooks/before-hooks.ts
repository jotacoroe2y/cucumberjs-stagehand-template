import {Before, setDefaultTimeout} from "@cucumber/cucumber";
import {CustomWorldParameters} from "../custom-world";
import {TIME} from "../../../constants/time";

setDefaultTimeout(TIME.twentySecsInMs);

Before(async function (this: CustomWorldParameters) {
    await this.stageHand.init();
});
