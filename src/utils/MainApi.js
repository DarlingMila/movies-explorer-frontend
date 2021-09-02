class MainApi {
  constructor ({ url }) {
    this.url = url;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  register(email, password, name) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, name})
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  login(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  changeUserInfo(email, name, token) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({email, name})
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  getUserInfo(token) {
    return fetch(`${this.url}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

} 

// const auth = new MainApi ({
//   url: 'http://localhost:3001',
// }); 

const auth = new MainApi ({
  url: 'http://api.movies-world.nomoredomains.monster',
}); 

export default auth;

