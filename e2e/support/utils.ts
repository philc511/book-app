import { Agent } from "https";
import { testDataSet } from "./test-dataset";

export function randomIntFromInterval(min, max) {// min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomPolicyNumber() {
  return String(randomIntFromInterval(1000000, 9999999));
}

export function generateRandomPhoneNumber() {
  return String(randomIntFromInterval(1000000, 9999999));
}

export function generateRandomString(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function deleteClaim(planNumber: string): Promise<void> {
    const axios = require("axios");
    const httpsAgent = new Agent({ rejectUnauthorized: false });

    const existingClaimList = await axios.get(testDataSet.claimsBaseUrl + "/api/Claims?systemPolicyId=" + planNumber,
        { httpsAgent: httpsAgent }).then(response => {
            return response.data;
        });

    if (existingClaimList.length > 0) {
        const notesList = await axios.get(testDataSet.claimsBaseUrl + "/api/Notes?claimId=" + existingClaimList[0]["id"],
        { httpsAgent: httpsAgent }).then(response => {
            return response.data;
        });
        notesList.forEach(async note => {
            await axios.delete(testDataSet.claimsBaseUrl + "/api/Notes/" + note.id,
                { httpsAgent: httpsAgent }).then(response => {
                  return response.data;
            });
        });
        await axios.delete(testDataSet.claimsBaseUrl + "/api/CLaims/" + existingClaimList[0]["id"],
                { httpsAgent: httpsAgent }).then(response => {
                  return response.data;
            });
    }
// http://localhost:62911/api/Notes?claimId=00000000-0000-0000-0000-000000000000

}
