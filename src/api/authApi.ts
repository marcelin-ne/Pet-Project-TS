import * as dotenv from "dotenv";


dotenv.config();

export async function connectToGithub(token: string | undefined, BASE_URL: string, ORG_NAME: string) {
    const BASE_URL_ORG = `https://api.github.com/orgs/${ORG_NAME}/repos`; 
    try {
        const response = await fetch(`${BASE_URL}/user`, {
            headers: {
              Authorization: `token ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to connect to  ${ORG_NAME}'s Repository on Github: ${response.statusText}`);
          } else {
            console.log("Connection Success")
          }
    } catch (error){
        throw new Error(`Failed to connect to Github: ${error}`);
    }
}
