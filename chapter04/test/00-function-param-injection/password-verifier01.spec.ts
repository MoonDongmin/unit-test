import {
    describe,
    expect,
    it,
}                        from "bun:test";
import {verifyPassword2} from "../../src/00-function-param-injection/password-verifier01.ts";

describe("password verifier with logger", () => {

    describe("when all rules pass", () => {
        it("calls the logger with PASSED", () => {
            // 모의 객체 코드
            let written: string = "";

            const mockLog = {
                info: (text: string) => {
                    written = text;
                },
            };

            verifyPassword2("anything", [], mockLog);
            expect(written).toMatch(/PASSED/);
        });
    });

});
