import {SmartHouseLight} from "./smart-house-light";
import {LightPowerCommand} from "./light-power-command";
import {SmartHouseApp} from "./smart-house-app";
import {LightIntensityCommand} from "./light-intensity-command";

const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand);

for (let i = 0; i < 8; i++) {
    smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
    smartHouseApp.undoCommand('btn-3');
}