import { useState, useEffect } from "react";
import Card from "../ui/Card";
import classes from "./RecentSearches.module.css";

function RecentSearches() {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("searches"));
    setRecents(data);
  }, []);

  return (
    <Card>
      <h1>Recent Searches</h1>
      {recents.length === 0 && (
        <div className="centered">
          <p>No Recent Searches</p>
        </div>
      )}
      <ul className={classes.recent_ul}>
        {recents.map((recent) => (
          <li className={classes.recent_li} key={recent.id}>
            {recent.name}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RecentSearches;
