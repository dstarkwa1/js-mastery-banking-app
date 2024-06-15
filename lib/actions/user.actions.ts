'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { parse } from "path";


export const signIn = async () => {

    try {

    } catch (error) {
        console.error('Error', error);
    }

}

export const signUp = async (userData: SignUpParams) => {

    try {

        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            userData.email, 
            userData.password, 
            `${userData.firstName} ${userData.lastName}`);
        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        });

        return parseStringify(newUserAccount)

    } catch (error) {
        console.error('Error', error);
    }

}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();

      return parseStringify(user)
    } catch (error) {
      return null;
    }
  }
  