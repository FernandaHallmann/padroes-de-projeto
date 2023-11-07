import {SmartHouseLight} from "./smart-house-light";
import {SmartHouseCommand} from "./smart-house-command";

export class LightIntensityCommand implements SmartHouseCommand {
    constructor(private readonly light: SmartHouseLight) {}

    execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(`A intensidade da luz ${this.light.name} agora é ${intensity}`);
    }

    undo(): void {
        const intensity = this.light.decreaseIntensity();
        console.log(`A intensidade da luz ${this.light.name} agora é ${intensity}`)
    }
}