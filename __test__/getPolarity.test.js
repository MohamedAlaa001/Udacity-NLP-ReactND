import getPolarity from '../src/client/js/getPolarity';

describe('Testing the polarity covertion from score_tag', () => {
  const values = [
    'Strong Positive',
    'Positive',
    'Neutral',
    'Negative',
    'Strong Negative',
    'Non Matching Polarity',
  ];
  test('Testing the getPolarity() function', () => {
    const val = getPolarity('P');
    expect(values).toContain(val);
  });
});
