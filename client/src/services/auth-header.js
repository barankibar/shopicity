export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Shopicity " + user.accessToken };
  } else {
    return {};
  }
}
