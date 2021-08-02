const updateUI = async ({
  agreement,
  subjectivity,
  confidence,
  irony,
  score_tag,
}) => {
  document.getElementById(
    'agreement'
  ).innerHTML = `<div>Agreement Type: <strong>${agreement.toLowerCase()}</strong></div>`;

  document.getElementById(
    'subjectivity'
  ).innerHTML = `<div>Subjectivity: <strong>${subjectivity.toLowerCase()}</strong></div>`;

  document.getElementById(
    'confidence'
  ).innerHTML = `<div>Confidence: <strong>${confidence.toLowerCase()}</strong></div>`;

  document.getElementById(
    'irony'
  ).innerHTML = `<div>Irony: <strong>${irony.toLowerCase()}</strong></div>`;

  const polarity = await Client.getPolarity(score_tag);
  document.getElementById(
    'polarity'
  ).innerHTML = `<div>Polarity: <strong>${polarity.toLowerCase()}</strong></div>`;
};

export default updateUI;
