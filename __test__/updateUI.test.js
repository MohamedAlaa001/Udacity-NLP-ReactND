/**
 * @jest-environment jsdom
 */
import updateUI from '../src/client/js/updateUI';
import getPolarity from '../src/client/js/getPolarity';

describe('Testing UI update function', () => {
  document.body.innerHTML = `
  <section class="form-results">
      <h3>Form Results:</h3>
      <div id="agreement"></div>
      <div id="subjectivity"></div>
      <div id="confidence"></div>
      <div id="irony"></div>
      <div id="polarity"></div>
    </section>`;

  test('Test updateUI() with its params', () => {
    const body = {
      agreement: 'AGREEMENT',
      subjectivity: 'SUBJECTIVE',
      confidence: '68',
      irony: 'IRONIC',
      score_tag: 'P',
    };

    updateUI(body);

    const irony = document.getElementById('irony');
    expect(irony.innerHTML).toEqual(
      '<div>Irony: <strong>ironic</strong></div>'
    );
  });
});
