import axios from "axios";



const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : '';

export const configuredApi = axios.create({
  baseURL: "http://localhost:5174",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
  },
  withCredentials: true,
});

