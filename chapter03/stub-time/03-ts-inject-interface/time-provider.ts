import moment                       from "moment";
import type {TimeProviderInterface} from "./time-provider-interface.ts";

export class RealTimeProvider implements TimeProviderInterface {
    getDay(): number | undefined {
        return moment().day();
    }
}
