const getKey = async () => {
  try {
    const res = await fetch('/key');

    return await res.text();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default getKey;
