export function getToken() {
  const token = localStorage.getItem("token");
  const date = localStorage.getItem("date");
  if (!token) return null;

  return { token, date };
}

export function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("date");
}
