import Stock from "./Stock";
import React, { useState, useEffect } from "react";
import style from "./App.css";

const baseUrl =
  "https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=";

function App() {
  const [stocks, setStocks] = useState([]);
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(baseUrl);
  const fetchStocks = async () => {
    try {
      const response = await fetch(url);
      const stocks = await response.json();
      stocks = setStocks(
        stocks
          .filter((stock) => stock.category === "ticker")
          .sort((a, b) =>
            a.label.toLowerCase().localeCompare(b.label.toLowerCase())
          )
          .slice(0, 9)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStocks();
  }, [url]);
  console.log(stocks);

  return (
    <main>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setUrl(`${baseUrl}${e.target.value}`);
        }}
      />
      <div className="grid-container">
        {stocks.map((stock, index) => {
          return <Stock key={index} {...stock} index={index} />;
        })}
      </div>
    </main>
  );
}

export default App;
