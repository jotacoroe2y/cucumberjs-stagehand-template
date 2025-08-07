import {IWorldOptions, setWorldConstructor, World} from '@cucumber/cucumber';
import {Stagehand} from "@browserbasehq/stagehand";
import StagehandConfig from "../../stagehand.config";

export interface CustomWorldParameters extends World {
    stageHand: Stagehand;
}

class CustomWorld extends World<CustomWorldParameters> {
    stageHand: Stagehand;

    constructor(options: IWorldOptions) {
        super(options);
        this.stageHand = new Stagehand({
            ...StagehandConfig,
        });
    }
}

setWorldConstructor(CustomWorld);
