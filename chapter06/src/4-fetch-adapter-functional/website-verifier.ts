export const isWebsiteAlive = async (network: any) => {
    const result = await network.fetchUrlText("http://example.com");
    if (result.ok) {
        const text = result.text;
        return onFetchSuccess(text);
    }
    return onFetchError(result.text);
};

export const onFetchSuccess = (text: string) => {
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

export const onFetchError = (err: any) => {
    return {
        success: false,
        status: err,
    };
};
