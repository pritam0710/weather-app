import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { getCityTime, searchByCityName } from "./utils/Helper";

const CityInput = React.lazy(() => import("./components/Page/CityInput"));
const CityWeather = React.lazy(() => import("./components/Page/CityWeather"));
const RecentSearches = React.lazy(() =>
  import("./components/Page/RecentSeaches")
);
const NotFound = React.lazy(() => import("./components/Page/NotFound"));

function App() {
  const [data, setData] = useState(null);
  const [recentHistory, setRecentHistory] = useState([]);

  useEffect(() => {
    const getDataFromLocalStorage = JSON.parse(
      localStorage.getItem("searches")
    );
    if (getDataFromLocalStorage) {
      setRecentHistory(getDataFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (recentHistory.length > 0) {
      localStorage.setItem("searches", JSON.stringify(recentHistory));
    }
  }, [recentHistory]);

  async function apiHandler(city) {
    const resData = await searchByCityName(city);
    const currentTime = getCityTime();
    resData["currentTime"] = currentTime;
    setData(resData);
    setRecentHistory((prevState) => [resData, ...prevState]);
  }

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route
            path="/weather/search"
            element={
              <>
                <CityInput apiHandler={apiHandler} />
                {data && <CityWeather data={data} />}
              </>
            }
          />
          <Route path="/weather/history" element={<RecentSearches />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
