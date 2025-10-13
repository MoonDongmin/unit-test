import {
    describe,
    it,
    expect,
    jest,
}                from "bun:test";
import {trigger} from "../src/trigger.ts";

describe("trigger", () => {
    it("works", () => {
        const callback = jest.fn();
        const result: number = trigger(1, 2, callback);

        expect(result).toBe(3);
        expect(callback).toHaveBeenCalledWith("I'm triggered");
    });
});
