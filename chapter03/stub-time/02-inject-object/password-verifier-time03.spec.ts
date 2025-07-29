import {
    MONDAY,
    SUNDAY,
}                         from "../001-modular/password-verifier-time00-modular";
import {PasswordVerifier} from "./password-verifier-time02";
import {
    describe,
    expect,
    test,
}                         from "bun:test";

// function FakeTimeProvider(fakeDay: any) {
//     // return {
//     //     getDay: function () {
//     //         return fakeDay;
//     //     },
//     // };
//     this.getDay = function () {
//         return fakeDay;
//     };
// }

class FakeTimeProvider {

    constructor(private fakeDay: any) {
    }

    getDay(): number {
        return this.fakeDay;
    }
}

describe("verifier", () => {
    test("class constructor: on weekends, throw exception", () => {
        const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));
        expect(() => verifier.verify("anything"))
            .toThrow("It's the weekend!");
    });
});
