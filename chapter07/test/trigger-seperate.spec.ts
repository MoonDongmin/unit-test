import {
    describe,
    it,
    expect,
    jest,
}                from "bun:test";
import {trigger} from "../src/trigger.ts";

describe("trigger", () => {
    it("triggers a given callback", () => {
        const callback = jest.fn();

        trigger(1, 2, callback);

        expect(callback).toHaveBeenCalledWith("I'm triggered");
    });

    it("sums up given values", () => {
        const result: number = trigger(1, 2, jest.fn());

        expect(result).toBe(3);
    });
});
