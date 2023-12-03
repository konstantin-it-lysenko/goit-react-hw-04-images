import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39983017-ab6cfdfc6bbf03f7c61f72b59';

const getImages = async (query, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: query,
    page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);

  return response.data;
};

export default getImages;
