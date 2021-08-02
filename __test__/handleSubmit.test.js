import handleSubmit from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    document.body.innerHTML = `
    <form class="" onsubmit="return Client.handleSubmit(event)">
      <textarea id="analyzeText" type="text" name="input" value="" placeholder="Enter text to analyze"></textarea>
      <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)"
        onsubmit="return Client.handleSubmit(event)">
    </form>
    `;
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    expect('').toThrow(/^Please enter some text...$/);
  });
});
