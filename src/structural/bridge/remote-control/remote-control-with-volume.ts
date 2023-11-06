import {DeviceImplementation} from "../device/device-implementation";
import {RemoteControl} from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
    volumeUp(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(oldVolume + 10);
        console.log(`${this.device.getName()} volume antigo: ${oldVolume} volume novo: ${this.device.getVolume()}`);
    }

    volumeDown(): void {
        const oldVolume = this.device.getVolume();
        this.device.setVolume(oldVolume - 10);
        console.log(`${this.device.getName()} volume antigo: ${oldVolume} volume novo: ${this.device.getVolume()}`);
    }
}