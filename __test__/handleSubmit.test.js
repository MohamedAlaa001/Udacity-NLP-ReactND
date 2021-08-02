/**
 * @jest-environment jsdom
 */
import handleSubmit from '../src/client/js/formHandler';
import getKey from '../src/client/js/getKey';
import updateUI from '../src/client/js/updateUI';
import getPolarity from '../src/client/js/getPolarity';

describe('Testing the submit functionality', () => {
  // document.body.innerHTML = `
  // <form class="" onsubmit="return Client.handleSubmit(event)">
  //   <textarea id="analyzeText" type="text" name="input" value="" placeholder="Enter text to analyze"></textarea>
  //   <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)"
  //     onsubmit="return Client.handleSubmit(event)">
  // </form>`;

  test('Testing the handleSubmit() function', () => {
    const event = { preventDefault: jest.fn() };

    handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
});
