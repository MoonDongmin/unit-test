export const calculate1 = (x: number, y: number, resultCallback: (result: number) => void) => {
    setTimeout(() => {
        resultCallback(x + y);
    }, 5000);
};

export const calculate2 = (getInputsFn: () => { x: number, y: number }, resultFn: (result: number) => void) => {
    setInterval(() => {
        const {
            x,
            y,
        } = getInputsFn();
        resultFn(x + y);
    }, 1000);
};
