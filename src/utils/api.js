class Api {
  constructor (url) {
    this.url = url;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  search (token, query) {
    return fetch (`${this.url}/movies?query=${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      return this._getResponseData(res);
    })
  }

  giveAll () {
    return fetch (`${this.url}`)
    .then(res => {
      return this._getResponseData(res);
    })
  }
}

const config = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
}

const api = new Api (config);

export default api;
