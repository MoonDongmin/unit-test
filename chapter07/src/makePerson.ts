export type MakePerson = (x: string, y: number) => MakePersonResult
export type MakePersonResult = { name: string, age: number, type: string }

export const makePerson: MakePerson = (x: string, y: number) => {
    return {
        name: x,
        age: y,
        type: "person",
    };
};
