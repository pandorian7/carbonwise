import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use((config) => {
  let token;
  try {
    token = JSON.parse(localStorage.getItem("token"));
    if (typeof token !== "string") throw new Error("invalid token");
  } catch {
    token = null;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function getEmissionEntries() {
  const user = getUser();
  const res = await apiClient.get(`/emission_entries/getUserById/${user.id}`);
}

async function saveEnerygEmissionData(data) {
  const pool = data.map((element) =>
    apiClient.post("/emission_entries/addEmissionEntry", element)
  );

  await Promise.all(pool);
}

async function login(email, password) {
  const res = await apiClient.post("/users/login", { email, password });
  const { token } = res.data;
  return token;
}

async function getRecommendations() {
  const res = await apiClient('/recommendations');
  return res.data;
}

export default {
  emissionEntries: {
    get: getEmissionEntries,
    save: saveEnerygEmissionData,
  },
  user: { login },
  recommendations: {get: getRecommendations}
};
