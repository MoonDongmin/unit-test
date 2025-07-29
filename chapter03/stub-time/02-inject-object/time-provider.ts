import moment from "moment";

// export const RealTimeProvider = () => {
//     return {
//         getDay: () => moment().day(),
//     };
// };

export class RealTimeProvider {
    getDay(): number {
        return moment().day();
    }
}

