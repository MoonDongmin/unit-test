import {
    describe,
    afterEach,
    test,
    expect,
    mock,
    beforeAll,
    jest
} from "bun:test";
import {
    verifyPassword,
} from "./password-verifier.ts";

mock.module("./complicated-logger", () => ({
    info: jest.fn(),   // mock.fn() 대신 mock()
    debug: jest.fn(),
}));

mock.module("./configuration-service", () => ({
    getLogLevel: mock(),
}));

let mockLoggerModule: any;
let stubConfigModule: any;

beforeAll(async () => {
    mockLoggerModule = await import("./complicated-logger");
    stubConfigModule = await import("./configuration-service");
});

describe("password verifier", () => {

    afterEach(() => {
        // 호출 카운트/리턴값 등 리셋
        mock.clearAllMocks();
    });

    test(`with info log level and no rules, 
          it calls the logger with PASSED`, () => {
        stubConfigModule.getLogLevel.mockReturnValue("info");

        verifyPassword("anything", []);

        expect(mockLoggerModule.info).toHaveBeenCalledWith(
            expect.stringMatching(/PASS/),
        );
    });

    test("with debug log level and no rules, it calls the logger with PASSED", () => {
        stubConfigModule.getLogLevel.mockReturnValue("debug");

        verifyPassword("anything", []);

        expect(mockLoggerModule.debug).toHaveBeenCalledWith(
            expect.stringMatching(/PASS/),
        );
    });
});
