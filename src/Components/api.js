// TraceMoe API

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

// AnimeChan API
const API_URL_ANIME_CHAN = 'https://animechan.xyz/api/quotes';

export function FIND_QUOTE_RANDOM() {
  return {
      url: API_URL_ANIME_CHAN,
  };
}

export function FIND_QUOTE_BY_ANIME_NAME(animeName, page) {
  return {
    url: API_URL_ANIME_CHAN + `/anime?title=${animeName}&page=${page}`,
  };
}

export function FIND_QUOTE_BY_CHARACTER_NAME(characterName, page) {
  return {
    url: API_URL_ANIME_CHAN + `/character?name=${characterName}&page=${page}`,
  };
}

// KITSU API

const API_URL_KITSU_ANIME = 'https://kitsu.io/api/edge/trending/anime';

export function GET_POPULAR_ANIME() {
  return {
    url: API_URL_KITSU_ANIME,
  };
}

const API_URL_KITSU_MANGA = 'https://kitsu.io/api/edge/trending/manga/';

export function GET_POPULAR_MANGA() {
  return {
    url: API_URL_KITSU_MANGA,
  };
}
