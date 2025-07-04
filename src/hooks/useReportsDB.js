import { useState, useEffect } from "react";
import setupIndexedDB, { useIndexedDBStore } from "use-indexeddb";

const idbConfig = {
  databaseName: "carbonwise",
  version: 1,
  stores: [
    {
      name: "reports",
      id: { keyPath: "id", autoIncrement: true },
      indices: [
        { name: "title", keyPath: "title", options: { unique: false } },
        { name: "emissionEnergy", keyPath: "emission.energy" },
        { name: "emissionTransport", keyPath: "emission.transport" },
        { name: "recommendationCount", keyPath: "recommendation.count" },
      ],
    },
  ],
};

export function setupCarbonWiseDB() {
  return setupIndexedDB(idbConfig);
}

export function useReportsDB() {
  setupCarbonWiseDB();
  const { add, getAll } = useIndexedDBStore("reports");
  const [reports, setReports] = useState([]);

  const refreshReports = () => {
    getAll().then(setReports);
  };

  const addReport = async (report) => {
    await add(report);
    refreshReports();
  };

  useEffect(() => {
    refreshReports();
  }, []);

  return { reports, addReport, getAll };
}
