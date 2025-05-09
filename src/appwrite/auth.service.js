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
            return await this.account.create(ID.unique(), email, password, name);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async loginUser({ email, password }) {
        try {
            const user = await this.account.createEmailPasswordSession(email, password);
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
        return await this.account.get();
        if (user) {
            return user;
        } else {
            throw new Error("User logout");
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw new Error("Appwrite logout", error.message);
        }
    }
}

const authService = new AuthService();

export default authService;