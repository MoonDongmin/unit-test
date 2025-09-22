// 진입점
export const isWebsiteAlive = async () => {
    try {
        const resp = await fetch("http://example.com");
        throwIfResponseNotOK(resp);
        const text = await resp.text();
        return processFetchContent(text);
    } catch (err: unknown) {
        processFetchError(err);
    }
};

export const throwIfResponseNotOK = (resp: Response) => {
    if (!resp.ok) {
        throw resp.statusText;
    }
};

// 진입점
export const processFetchContent = (text: string) => {
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

// 진입점
export const processFetchError = (err: unknown): never => {
    throw err;
};
