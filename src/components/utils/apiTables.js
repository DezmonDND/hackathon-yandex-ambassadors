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
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTU5MjI4LCJpYXQiOjE3MDk4NzI4MjgsImp0aSI6IjI3N2VjNTg0Y2M3ZjRmMDY5MTg3ZTA2MjI1ODg5ZWExIiwidXNlcl9pZCI6NX0.gtYhcqd_WlBgpviNGXxrfdzYIdlo2AR6htcM8o5zY3M";
    // const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/promocodes`, {
      headers: {
        // method: "GET",
        authorization: token,
        "Content-Type": "application/json",
        // authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  // Получить Промокоды
  getAmbassadors() {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTU5MjI4LCJpYXQiOjE3MDk4NzI4MjgsImp0aSI6IjI3N2VjNTg0Y2M3ZjRmMDY5MTg3ZTA2MjI1ODg5ZWExIiwidXNlcl9pZCI6NX0.gtYhcqd_WlBgpviNGXxrfdzYIdlo2AR6htcM8o5zY3M";
    // const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/ambassadors`, {
      headers: {
        // method: "GET",
        authorization: token,
        "Content-Type": "application/json",
        // authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }

  editPromocodes(inputValues) {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTU5MjI4LCJpYXQiOjE3MDk4NzI4MjgsImp0aSI6IjI3N2VjNTg0Y2M3ZjRmMDY5MTg3ZTA2MjI1ODg5ZWExIiwidXNlcl9pZCI6NX0.gtYhcqd_WlBgpviNGXxrfdzYIdlo2AR6htcM8o5zY3M";
    // const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/promocodes`, {
      method: "PATCH",
      headers: {
        // authorization: `Bearer ${token}`,
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.about,
      }),
    }).then(this._checkError);
  }

  editAmbassadors(id) {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTU5MjI4LCJpYXQiOjE3MDk4NzI4MjgsImp0aSI6IjI3N2VjNTg0Y2M3ZjRmMDY5MTg3ZTA2MjI1ODg5ZWExIiwidXNlcl9pZCI6NX0.gtYhcqd_WlBgpviNGXxrfdzYIdlo2AR6htcM8o5zY3M";
    // const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/ambassadors/${id}`, {
      method: "PATCH",
      headers: {
        // authorization: `Bearer ${token}`,
        authorization: token,
        "Content-Type": "application/json",
      },
    }).then(this._checkError);
  }

  getSendMerch() {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTU5MjI4LCJpYXQiOjE3MDk4NzI4MjgsImp0aSI6IjI3N2VjNTg0Y2M3ZjRmMDY5MTg3ZTA2MjI1ODg5ZWExIiwidXNlcl9pZCI6NX0.gtYhcqd_WlBgpviNGXxrfdzYIdlo2AR6htcM8o5zY3M";
    // const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/send_merch`, {
      headers: {
        // method: "GET",
        authorization: token,
        "Content-Type": "application/json",
        // authorization: `Bearer ${token}`,
      },
    }).then(this._checkError);
  }
}

export const apiTables = new ApiTables({
  baseUrl: "https://hackathon-yacrm04.sytes.net/api/v1",
});
