import { test, expect } from "@playwright/test";
import { UserIdentification } from "../../src/Database/APP_USER_MANAGEMENT/UserIdentification";

test("Query user identification by username", async () => {
  const username = process.env.TEST_USERNAME!;
  const user = await UserIdentification.findByUsername(username);
  console.log(user); 
  expect(user).toBeDefined();
  expect(user).toMatchObject({
  // USERNAME: username,
  // FACE_COLLECTED: "1",
  // IDENTITY_NUMBER: "001198014547",

  USER_ID:"fcb22e32-8d09-4470-ab25-e4f5316e495f",
  USERNAME:username,
  //ISSUE_DATE: "2023-05-20T17:00:00.000Z",
  //EXPIRY_DATE: "2034-04-19T17:00:00.000Z",
  FACE_COLLECTED: 1,
  IDENTITY_NUMBER: '034194004894',
  IDENTITY_TYPE: 'CCCD',
  //CREATED_AT: "2026-09-04T01:30:28.615Z",
  //UPDATED_AT: "2026-09-04T01:30:28.615Z",
  REQUEST_ID: 'c7bf445f-5831-4605-a2f8-ab53f4b555ef',
  COUNTRY_CODE: 'VN',
  ERROR_CODE: null,
  ERROR_MESSAGE: null,
  FACE_AUTH_RETRY_COUNT: null,
  PASSWORD_EXPIRING_SOON: null,
  REQUEST_SUPPLEMENTARY_DOCUMENT: null
});
});