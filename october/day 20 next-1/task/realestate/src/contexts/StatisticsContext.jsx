import { createContext, useContext, useEffect, useState } from "react";

const StatisticsContext = createContext();

export function StatisticsProvider({ children }) {
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/statistics");
        const data = await res.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <StatisticsContext.Provider value={{ statistics, loading }}>
      {children}
    </StatisticsContext.Provider>
  );
}

export function useStatistics() {
  return useContext(StatisticsContext);
}
