export const API_URL = 'https://api.trace.moe/search';

export function UPLOAD_IMAGE(formData) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      body: formData,
    },
  };
}
