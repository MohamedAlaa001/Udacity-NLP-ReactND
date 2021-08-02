import getKey from '../src/client/js/getKey';
const dotenv = require('dotenv');

describe('Testing api key fetching', () => {
  test('Test getKey to return api key', () => {
    const output = process.env.API_KEY;

    expect(getKey()).resolves.toBe(output);
  });
});
