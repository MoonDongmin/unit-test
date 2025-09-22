import {fetchUrlText} from "./network-adapter.ts";

export const isWebsiteAlive = async () => {
    try {
        const result = await fetchUrlText("http://example.com");
        if (!result.ok) {
            throw result.text;
        }
        const text = result.text;
        return processFetchSuccess(text);
    } catch (err: unknown) {
        throw processFetchFail(err);
    }
};

export const processFetchSuccess = (text: string) => {
    const included = text.includes("illustrative");
    if (included) {
        return {
            success: true,
            status: "ok",
        };
    }
    return {
        success: false,
        status: "missing text",
    };
};

export const processFetchFail = (err: unknown) => {
    return {
        success: false,
        status: err,
    };
};
