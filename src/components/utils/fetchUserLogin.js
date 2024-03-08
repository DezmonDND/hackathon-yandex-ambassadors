import { baseUrl } from "./constants";

export default async function fetchUserLogin({ email, password }) {
  try {
    // const res = await fetch(`${baseUrl}auth/login/`, {
    const res = await fetch(
      "https://hackathon-yacrm04.sytes.net/api/v1/auth/jwt/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }

    const data = { token: await res.json() };
    localStorage.setItem("JWT", data.token.auth_token);
    return data;
  } catch (err) {
    console.log(err);
  }
}
