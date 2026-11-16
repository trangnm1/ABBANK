import { APIRequestContext } from "@playwright/test";

export class AuthApi {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
return this.request.post("/auth/realms/abbank/protocol/openid-connect/token", {
  form: {
    grant_type: "password",
    client_id: process.env.CLIENT_ID!,
    username: email,
    password,
  },
});
  }
}