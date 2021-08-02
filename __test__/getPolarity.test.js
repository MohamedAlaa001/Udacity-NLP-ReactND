import getPolarity from '../src/client/js/getPolarity';

describe('Testing the polarity covertion from score_tag', () => {
  test('Testing the getPolarity() function', () => {
    expect(getPolarity('P')).resolves.toBe('Positive');
  });
});
