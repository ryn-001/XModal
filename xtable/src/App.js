import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateDiff = (new Date(b.date)) - (new Date(a.date));
      if(dateDiff !== 0) return dateDiff;
      return b.views - a.views;
    });
    setData(sortedData);
  }

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewDiff = b.views - a.views;
      if(viewDiff !== 0) return viewDiff;
      return (new Date(b.date)) - (new Date(a.date));
    });
    setData(sortedData);
  }

  return (
    <div className="App">
      <h1>Date and View Tables</h1>

      <button id="sort-by-date" onClick={handleSortByDate}>Sort by Date</button>
      <button id="sort-by-views" onClick={handleSortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ele,idx) => (
            <tr key={idx}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
