import axios from "axios";
import { getUser } from "./auth";

console.log(import.meta.env.VITE_API_URL);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function getEmissionEntries() {
  const user = getUser();
  const res = await apiClient.get(`/emission_entries/getUserById/${user.id}`);
  console.log(res.data);
}

async function saveEnerygEmissionData(data) {
  const pool = data.map((element) =>
    apiClient.post("/emission_entries", element)
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
    { name: "Purchased Goods", value: 150 },
    { name: "Others", value: 50 },
  ];
}

//This function is for the Line chart
async function getTotalEmmisionMonthWise() {
  console.log("executed getTotalEmmisionMonthWise");

  return[
    { month: 'Jan', value: 300 },
    { month: 'Feb', value: 180 },
    { month: 'Mar', value: 250 },
    { month: 'Apr', value: 100 },
    { month: 'May', value: 300 },
    { month: 'Jun', value: 280 },
    { month: 'Jly', value: 200 },
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
  emmisionMonthWise:{
    get: getTotalEmmisionMonthWise,
  },
};
