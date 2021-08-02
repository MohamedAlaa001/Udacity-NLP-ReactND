const handleSubmit = async (event) => {
  event.preventDefault();
  let formText = document.getElementById('analyzeText').value.trim();

  if (formText === '') {
    alert('Please enter some text...');
    throw new Error('Please enter some text...');
  }

  const apiKey = await Client.getKey();

  const formdata = new FormData();
  formdata.append('txt', formText);
  formdata.append('key', apiKey);
  formdata.append('lang', 'en');

  const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  });
  try {
    const data = await response.json();
    Client.updateUI(data);
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
};

export default handleSubmit;
