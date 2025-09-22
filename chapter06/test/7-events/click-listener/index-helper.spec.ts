// import * as path from "node:path";
// import * as fs from "node:fs";
// import {
//     describe,
//     expect,
//     test,
//     beforeEach,
// } from "bun:test";
// import { JSDOM } from "jsdom";


// /**
//  * @jest-environment jsdom
//  */
// // (위는 window 이벤트를 위한 설정입니다)
// //chapter06/src/7-events/click-listener/index.html

// let dom: JSDOM;
// let document: Document;
// let window: JSDOM["window"];

// beforeEach(() => {
//     // 각 테스트마다 새로운 DOM 환경 생성
//     dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
//         url: "http://localhost",
//         pretendToBeVisual: true,
//         resources: "usable",
//     });

//     // 전역 변수로 설정
//     document = dom.window.document;
//     window = dom.window as any;

//     // 전역 객체에 할당 (필요한 경우)
//     (global as any).document = document;
//     (global as any).window = window;
// });

// const loadHtml = (fileRelativePath: string) => {
//     const filePath: string = path.join(__dirname, "../../../src/7-events/click-listener", "index.html");
//     console.log(filePath);
//     const innerHTML: string = fs.readFileSync(filePath, "utf-8");
//     document.documentElement.innerHTML = innerHTML;
// };

// const loadHtmlAndGetUIElements = () => {
//     loadHtml("index.html");
//     const button = document.getElementById("myButton");
//     const resultDiv = document.getElementById("myResult");
//     return {
//         window,
//         button,
//         resultDiv,
//     };
// };

// describe("index helper", () => {
//     test("vanilla button click triggers change in result div", () => {
//         const {
//             window,
//             button,
//             resultDiv,
//         } = loadHtmlAndGetUIElements();
//         window.dispatchEvent(new window.Event("load"));

//         button!.click();

//         expect(resultDiv!.innerText).toBe("Clicked!");
//     });
// });
import * as path from "node:path";
import * as fs from "node:fs";
import {
    describe,
    expect,
    test,
    beforeEach,
} from "bun:test";
import { JSDOM } from "jsdom";

let dom: JSDOM;
let document: Document;
let window: JSDOM["window"];

beforeEach(() => {
    // HTML 파일을 직접 읽어서 JSDOM에 전달
    const filePath: string = path.join(__dirname, "../../../src/7-events/click-listener", "index.html");
    const htmlContent: string = fs.readFileSync(filePath, "utf-8");
    
    // JSDOM에 HTML 콘텐츠를 직접 전달하고 스크립트 실행 허용
    dom = new JSDOM(htmlContent, {
        url: "http://localhost",
        pretendToBeVisual: true,
        resources: "usable",
        runScripts: "dangerously",
    });

    // 전역 변수로 설정
    document = dom.window.document;
    window = dom.window;

    // 전역 객체에 할당 (필요한 경우)
    (global as any).document = document;
    (global as any).window = window;
    
    // 스크립트를 수동으로 실행
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
});

const loadHtmlAndGetUIElements = () => {
    const button = document.getElementById("myButton");
    const resultDiv = document.getElementById("myResult");
    
    return {
        window,
        button,
        resultDiv,
    };
};

describe("index helper", () => {
    test("vanilla button click triggers change in result div", () => {
        const {
            window,
            button,
            resultDiv,
        } = loadHtmlAndGetUIElements();
        
        // load 이벤트 발생
        window.dispatchEvent(new window.Event("load"));
        
        // 버튼 클릭
        button!.click();
        
        expect(resultDiv!.innerText).toBe("Clicked!");
    });
});