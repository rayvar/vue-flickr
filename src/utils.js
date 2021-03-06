export const getAPIURL = (text, maxResults = 10) => {
  return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.VUE_APP_APIKEY}&format=json&nojsoncallback=1&text=${text}&per_page=${maxResults}`;
}

const getPhotoUrl = ({farm, server, id, secret}) => {
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}

export const getPhotosFromResponse = (response) => {  
  const responsePhotos = response.photos.photo;
  return responsePhotos.map(photo => {
    return { ...photo, url: getPhotoUrl(photo) }
  });
};
