import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('64b0d3f985fdfb922b9d');

export const account = new Account(client)
export const database = new Databases(client)