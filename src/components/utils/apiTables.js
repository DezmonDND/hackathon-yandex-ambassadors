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

  // Таблица Промокоды
  getPromocodes() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/promocodes`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  // Таблица Амбассадоры
  getAmbassadors() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/ambassadors`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  deleteRowAmbassadors(id) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/ambassadors/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  addNewRowAmbassadors(data) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/ambassadors/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: data.id,
        status: data.status,
        created: data.created,
        name: data.name,
        gender: data.gender,
        onboarding_status: data.onboarding_status,
        program: data.program,
        email: data.email,
        phone_number: data.phone_number,
        telegram_id: data.telegram_id,
        education: data.education,
        job: data.job,
        purpose: data.purpose,
        tutor: data.tutor,
      }),
    }).then(this._checkError);
  }

  // Таблица Отправка мерча
  getSendMerch() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/send_merch`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  deleteRowSendMerch(id) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/send_merch/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  // Таблица Бюджет на мерч=>Бюджет

  // Таблица Бюджет=>Стоимость товара
  getBudgetPrice() {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  deleteRowBudgetPrice(id) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  addNewRowBudgetPrice(data) {
    console.log(data);
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        cost: data.cost,
        category: data.category,
      }),
    }).then(this._checkError);
  }

  editRowBudgetPrice({ id, data }) {
    const token = localStorage.getItem("JWT");
    return fetch(`${this._baseUrl}/merch_price/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        cost: data.cost,
        category: data.category,
      }),
    }).then(this._checkError);
  }
}

export const apiTables = new ApiTables({
  baseUrl: "https://hackathon-yacrm04.sytes.net/api/v1",
});
