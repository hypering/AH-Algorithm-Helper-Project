export default class API {
  static async get(url) {
    const response = await fetch(`${process.env.BASE_URL}/${url}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }
  static async post(url, payload) {
    const response = await fetch(`${process.env.BASE_URL}/${url}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: payload,
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }
}
