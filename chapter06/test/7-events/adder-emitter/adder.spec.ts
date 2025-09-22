import {
    describe,
    expect,
    it,
}              from "bun:test";
import {Adder} from "../../../src/7-events/adder-emitter/adder.ts";

describe("events based module", () => {
    describe("add", () => {
        it("generates addition event when called", (done) => {
            const adder = new Adder();

            adder.on("added", (result: number) => {
                expect(result).toBe(3);
                done();
            });

            adder.add(1, 2);
        });
    });
});
