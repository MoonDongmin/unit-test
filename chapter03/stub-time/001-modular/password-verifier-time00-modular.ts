import type moment from "moment";

const originalDependencies = {
    moment: require("moment"),
};

let dependencies: { moment: typeof moment } = {...originalDependencies};

export const inject = (fakes: any) => {
    Object.assign(dependencies, fakes);
    return function reset() {
        dependencies = {...originalDependencies};
    };
};

export const SUNDAY = 0;
export const SATURDAY = 6;
export const MONDAY = 1;

export const verifyPassword = (input: string, rules: any) => {
    const dayOfWeek = dependencies.moment().day();

    if ([SATURDAY, SATURDAY].includes(dayOfWeek)) {
        throw new Error("It's the weekend!");
    }

    return [];
};


