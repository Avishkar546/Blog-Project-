import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6819c8b2002a424bf31e');

export const account = new Account(client);
export { ID } from 'appwrite';
