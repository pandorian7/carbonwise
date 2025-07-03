import axios from "axios";
import { getUser } from "./auth";

console.log(import.meta.env.VITE_API_URL);

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
  console.log(res.data);
}

async function saveEnerygEmissionData(data) {
  const pool = data.map((element) =>
    apiClient.post("/emission_entries/addEmissionEntry", element)
  );

  await Promise.all(pool);
}

//This function is for the PI chart
async function getEmmisionWithSource() {
  //const user = getUser();
  //Implement the API call here
  //I add this dummy return to avoid error
  console.log("executed getEmmisionWithSource");
  return [
    { name: "Electricity", value: 600 },
    { name: "Transport", value: 300 },
    { name: "Waste", value: 200 },
    { name: "Water", value: 100 },
    { name: "Material", value: 150 },
    { name: "Others", value: 50 },
  ];
}


export default {
  emissionEntries: {
    get: getEmissionEntries,
    save: { energy: saveEnerygEmissionData },
  },
    emissionWithSource: {
    get: getEmmisionWithSource,
  },
};
