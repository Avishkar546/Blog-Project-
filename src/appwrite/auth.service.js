import { Account, Client, ID } from "appwrite";
import conf from "../../conf/conf";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.APPWRITE_URL).setProject(conf.APPWRITE_PROJECT_ID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const account = await this.account.create(ID.unique(), email, password, name);
            console.log(account);
            return account;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async loginUser({ email, password }) {
        try {
            const user = await account.createEmailPasswordSession(email, password);
            console.log(user);
            if (user) {
                return user;
            } else {
                throw new Error("User does not exist");
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getCurrentUser() {
        const user = this.account.get();
        console.log(user);
        if (user) {
            return user;
        } else {
            throw new Error("User logout");
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error("Appwrite logout", error);
        }
    }
}

const authService = new AuthService();

export default authService;