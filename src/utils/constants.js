let BASE_URL =
  window.location.host === "localhost:3000"
    ? "http://localhost:8080"
    : "https://postinger-o5u4.onrender.com";

export default BASE_URL;
