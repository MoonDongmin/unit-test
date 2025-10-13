type Trigger = (x: number, y: number, callback: (a: string) => string) => number;

export const trigger: Trigger = (x: number, y: number, callback: (a: string) => string): number => {
    callback("I'm triggered");
    return x + y;
};
