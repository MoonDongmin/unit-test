import {TimeProviderInterface} from "./time-provider-interface";
import moment = require("moment");

export class RealTimeProvider implements TimeProviderInterface {
    getDay(): number {
        return moment().day();
    }
}
