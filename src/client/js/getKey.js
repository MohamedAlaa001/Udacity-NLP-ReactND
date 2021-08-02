const getKey = async () => {
  try {
    const res = await fetch('/key');

    return await res.text();
  } catch (err) {
    throw err;
  }
};

export default getKey;
