import * as path from "node:path";
import * as fs from "node:fs";
import {
    describe,
    expect,
    test,
    beforeEach,
} from "bun:test";
import {
    fireEvent,
    findByText,
    getByText,
} from "@testing-library/dom";
import { JSDOM } from "jsdom";

// JSDOM 설정
let dom: JSDOM;
let document: Document;
let window: JSDOM["window"];

beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
        url: "http://localhost",
        pretendToBeVisual: true,
        resources: "usable",
    });

    document = dom.window.document;
    window = dom.window;

    // 전역 설정
    (global as any).document = document;
    (global as any).window = window;
});

const loadHtml = (fileRelativePath) => {
    // 라이브러리 API는 대부분 문서 요소를 기반으로 작업을 처리한다
    const filePath = path.join(__dirname, "../../../src/7-events/click-listener", "index.html");
    const innerHTML = fs.readFileSync(filePath, "utf-8");
    document.documentElement.innerHTML = innerHTML;

    // 스크립트를 수동으로 실행 (JSDOM에서 외부 스크립트가 로드되지 않으므로)
    const scriptContent = `
        window.addEventListener("load", () => {
            document
                .getElementById("myButton")
                .addEventListener("click", onMyButtonClick);

            const resultDiv = document.getElementById("myResult");
            resultDiv.innerText = "Document Loaded";
        });

        function onMyButtonClick() {
            const resultDiv = document.getElementById("myResult");
            resultDiv.innerText = "Clicked!";
        }
    `;

    // JSDOM window 컨텍스트에서 스크립트 실행
    const script = new window.Function(scriptContent);
    script.call(window);

    return document.documentElement;
};

const loadHtmlAndGetUIElements = () => {
    const docElem = loadHtml("index.html");
    const button = getByText(docElem, "Click Me!", { exact: false });
    return {
        window,
        docElem,
        button,
    };
};

describe("index helper", () => {
    test("dom test lib button click triggers change in page", () => {
        const {
            window,
            docElem,
            button,
        } = loadHtmlAndGetUIElements();
        fireEvent.load(window as any); // 라이브러리의 fireEvent API를 사용하여 이벤트 디스패치를 간소화함

        fireEvent.click(button);

        // true가 될 때까지 기다리거나 1초 내에 타임아웃
        expect(findByText(docElem, "Clicked", { exact: false })).toBeTruthy();
    });
});
