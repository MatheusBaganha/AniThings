export const API_URL = 'https://api.trace.moe/search';

export function UPLOAD_IMAGE(formData) {
  return {
    url: API_URL + `?anilistInfo`,
    options: {
      method: 'POST',
      body: formData,
    },
  };
}

export function SEARCH_IMAGE_BY_URL(urlImage) {
  return {
    url: API_URL + `?anilistInfo&url=${encodeURIComponent(urlImage)}`,
  };
}
