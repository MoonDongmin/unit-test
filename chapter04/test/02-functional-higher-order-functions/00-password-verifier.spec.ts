import {
    describe,
    it,
    expect,
}                        from "bun:test";
import {verifyPassword3} from "../../src/02-functional-higher-order-functions/00-password-verifier.ts";

describe("password verifier", () => {
    describe("given logger and passing scenario", () => {
        it("calls the logger with PASS", () => {
            let logged = "";
            const mockLog = {info: (text: string) => (logged = text)};

            const injectedVerify = verifyPassword3([], mockLog);

            // 이 커링 함수는 로거를 미리 매개변수로 전달했기 때문에
            // 이후 로거를 다시 주입하지 않고도 코드의 다른 부분에 전달할 수 있음
            injectedVerify("anything");

            expect(logged).toMatch(/PASSED/);
        });
    });
});
