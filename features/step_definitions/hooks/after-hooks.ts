import {After, setDefaultTimeout} from "@cucumber/cucumber";
import {CustomWorldParameters} from "../custom-world";
import {TIME} from "../../../constants/time";

setDefaultTimeout(TIME.twentySecsInMs);

After(async function (this: CustomWorldParameters) {
    await this.stageHand.close();
});
