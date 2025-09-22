export const fetchUrlText = async (url: string): Promise<{
    ok: boolean,
    text: string
}> => {
    const resp: Response = await fetch(url);
    if (resp.ok) {
        const text = await resp.text();
        return {
            ok: true,
            text: text,
        };
    }
    return {
        ok: false,
        text: resp.statusText,
    };
};
