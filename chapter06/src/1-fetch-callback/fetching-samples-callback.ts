import fetch                       from "node-fetch";
import type {WebsiteCheckCallback} from "../0-before/fetching-samples-before.ts";

// 진입점
export const isWebsiteAlive = (callback: WebsiteCheckCallback) => {
    fetch("http://example.com")
        .then(throwOnInvalidResponse)
        .then((resp) => resp.text())
        .then((text) => {
            processFetchSuccess(text, callback);
        })
        .catch((err) => {
            processFetchError(err, callback);
        });
};

export const throwOnInvalidResponse = (resp: any) => {
    if (!resp.ok) {
        throw Error(resp.statusText);
    }
    return resp;
};

// 진입점
export const processFetchSuccess = (text: string, callback: WebsiteCheckCallback) => {
    if (text.includes("illustrative")) {
        callback({
            success: true,
            status: "ok",
        });
    } else {
        callback({
            success: false,
            status: "missing text",
        });
    }
};

// 진입점
export const processFetchError = (err: string, callback: WebsiteCheckCallback) => {
    callback({
        success: false,
        status: err,
    });
};
