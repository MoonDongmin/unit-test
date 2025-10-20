import {getUserCache} from "../src/sharedUserCache.ts";
import {SpecialApp}   from "../src/specialApp.ts";
import {
    describe,
    expect,
    test,
    beforeEach,
}                     from "bun:test";

const addDefaultUser: () => void
    = () =>
    getUserCache().addUser({
        key: "a",
        password: "abc",
    });

const makeSpecialApp: () => SpecialApp
    = () => new SpecialApp();

describe("Test Dependence v2", () => {
    beforeEach(() => getUserCache().reset());

    describe("user cache", () => {
        test("can only add cache use once", () => {
            addDefaultUser();

            expect(() => addDefaultUser()).toThrowError("already exists");
        });
    });

    describe("loginUser with loggedInUser", () => {
        test("user exists, login succeeds", () => {
            addDefaultUser();
            const app: SpecialApp = makeSpecialApp();

            const result: boolean = app.loginUser("a", "abc");
            expect(result).toBe(true);
        });

        test("user missing, login fails", () => {
            const app: SpecialApp = makeSpecialApp();

            const result: boolean = app.loginUser("a", "abc");
            expect(result).toBe(false);
        });
    });
});
