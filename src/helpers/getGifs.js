const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3pWsWgb6bOtxxlTn16q67o3OlErYGRcC&q=${category}&limit=10`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((el) => ({
    id: el.id,
    title: el.title,
    url: el.images.downsized_medium,
  }));

  return gifs;
};

export { getGifs };
