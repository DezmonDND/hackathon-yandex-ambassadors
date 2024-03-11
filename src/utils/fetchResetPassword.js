import { baseUrl } from "./constants";

export default async function fetchResetPassword({ email }) {
  try {
    const res = await fetch(`${baseUrl}auth/token/reset-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
