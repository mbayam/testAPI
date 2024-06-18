import { env } from './env';

describe('Env', () => {
  it('should have api url setup', () => {
    expect(env.API_URL).toEqual('https://gorest.co.in/public/v2/users');
  });
});
