import {getUserCache} from "../src/sharedUserCache.ts";
import {SpecialApp}   from "../src/specialApp.ts";
import {
    describe,
    expect,
    test,
}                     from "bun:test";


describe("Test Dependence", () => {
    describe("loginUser with loggedInUser", () => {
        test("no user, login fails", () => {
            const app = new SpecialApp();

            const result: boolean = app.loginUser("a", "abc");

            expect(result).toBe(false);
        });
    });

    test("can only cache each user once", () => {
        getUserCache().addUser({
            key: "a",
            password: "abc",
        });

        expect(() =>
            getUserCache().addUser({
                key: "a",
                password: "abc",
            }),
        ).toThrowError("already exists");
    });

    test("user exists, login succeeds", () => {
        const app = new SpecialApp();

        const result: boolean = app.loginUser("a", "abc");

        expect(result).toBe(true);
    });
});
