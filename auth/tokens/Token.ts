export class Token {
  token: string | null;

  constructor(token: string | null) {
    this.token = token;
  }

  get authHeaders(): Record<string, string> {
    return {
      authorization: `Bearer ${this.token}`,
    };
  }

  async check(): Promise<any> {
    try {
      return await useFetch('https://shoply-api.nanoit.dev/api/auth/user-info', { headers: this.authHeaders });
    }
    catch (e) {
      console.log(e);
    }
  }
}
