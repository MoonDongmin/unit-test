import {
    getUserCache,
    type IUserCache,
    type IUserDetails,
} from "./sharedUserCache";

export class SpecialApp {
    loginUser(key: string, pass: string): boolean {
        const cache: IUserCache = getUserCache();

        const foundUser: IUserDetails | undefined = cache.getUser(key);

        if (foundUser?.password === pass) {
            return true;
        }

        return false;
    }
}
