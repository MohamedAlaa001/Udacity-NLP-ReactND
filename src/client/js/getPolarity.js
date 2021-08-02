const getPolarity = async (score_tag) => {
  switch (score_tag) {
    case 'P+':
      return 'Strong Positive';
    case 'P':
      return 'Positive';
    case 'NEU':
      return 'Neutral';
    case 'N':
      return 'Negative';
    case 'N+':
      return 'Strong Negative';
    default:
      return 'Non Matching Polarity';
  }
};

export default getPolarity;
/*
  P+: strong positive
  P: positive
  NEU: neutral
  N: negative
  N+: strong negative
  NONE: without polarity
*/
