// 콜백 버전
import fetch from "node-fetch";

export type WebsiteResult = {
    success: boolean;
    status?: string | Error;
}

export type WebsiteCheckCallback = (result: WebsiteResult) => void;

export const isWebsiteAliveWithCallback = (callback: WebsiteCheckCallback) => {
    const website = "http://example.com";
    fetch(website)
        .then((response) => {
            if (!response.ok) {
                // 이 네트워크 문제를 어떻게 시뮬레이션할 수 있을까?
                throw Error(response.statusText); // 예외 처리를 위해 사용자 정의 오류 던지기
            }
            return response;
        })
        .then((response) => response.text())
        .then((text) => {
            if (text.includes("illustrative")) {
                callback({
                    success: true,
                    status: "ok",
                });
            } else {
                // 이 경로를 어떻게 테스트할 수 있을까?
                callback({
                    success: false,
                    status: "text missing",
                });
            }
        })
        .catch((err) => {
            // 이 종료점을 어떻게 테스트할 수 있을까?
            callback({
                success: false,
                status: err,
            });
        });
};

// async/await 버전
export const isWebsiteAliveWithAsyncAwait = async () => {
    try {
        const resp = await fetch("http://example.com");
        if (!resp.ok) {
            // 비정상적인 응답을 어떻게 테스트할 수 있을까?
            throw resp.statusText; // 예외 처리를 위해 사용자 정의 오류 던지기
        }
        const text = await resp.text();
        const included = text.includes("illustrative");
        if (included) {
            return {
                success: true,
                status: "ok",
            };
        }
        // 다른 웹사이트 콘텐츠를 어떻게 테스트할 수 있을까?
        throw "text missing";
    } catch (err) {
        return {
            success: false,
            status: err,
        }; // 오류를 응답으로 감싸기
    }
};

