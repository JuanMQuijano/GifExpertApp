export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=QGY5r8yJT3oiv1pOrMMZ1hcnroFCk5jL&q=${category}&limit=10`;

  try {
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.log(error);
  }
};
