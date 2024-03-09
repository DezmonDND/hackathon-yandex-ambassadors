export class ApiTables {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Получить Промокоды
  getPromocodes() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/promocodes`, {
      headers: {
        // method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  // Получить Промокоды
  getAmbassadors() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/ambassadors`, {
      headers: {
        // method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  editPromocodes(inputValues) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/promocodes`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.about,
      }),
    }).then(this._checkError);
  }

  editAmbassadors(id) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/ambassadors/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkError);
  }

  getSendMerch() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/send_merch`, {
      headers: {
        // method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  getBudgetPrice() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price`, {
      headers: {
        // method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  createBudgetPrice() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price`, {
      headers: {
        method: "POST",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  getLoyalti() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price`, {
      headers: {
        // method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }
}

export const apiTables = new ApiTables({
  baseUrl: "https://hackathon-yacrm04.sytes.net/api/v1",
});
