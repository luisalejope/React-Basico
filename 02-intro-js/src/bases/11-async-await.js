const getImagen = async () => {
  try {
    const apiKey = "3943VVjWEmLud8vl7BGHO9MqeG33ZGe9";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const url = await data.images.original.url;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

    console.log(url);
  } catch (error) {
    console.warn(error)
  }
};

getImagen();
