const API_URL_TRACE_MOE = 'https://api.trace.moe/search';

export function UPLOAD_IMAGE(formData) {
  return {
    url: API_URL_TRACE_MOE + `?anilistInfo`,
    options: {
      method: 'POST',
      body: formData,
    },
  };
}

export function SEARCH_IMAGE_BY_URL(urlImage) {
  return {
    url: API_URL_TRACE_MOE + `?anilistInfo&url=${encodeURIComponent(urlImage)}`,
  };
}

const API_URL_ANIME_CHAN = 'https://animechan.vercel.app/api/quotes';

export function FIND_QUOTE_RANDOM() {
  return {
    url: API_URL_ANIME_CHAN,
  };
}

export function FIND_QUOTE_BY_ANIME_NAME(value, page) {
  return {
    url: API_URL_ANIME_CHAN + `/anime?title=${value}&page=${page}`,
  };
}

export function FIND_QUOTE_BY_CHARACTER_NAME(value, page) {
  return {
    url: API_URL_ANIME_CHAN + `/character?name=${value}&page=${page}`,
  };
}
