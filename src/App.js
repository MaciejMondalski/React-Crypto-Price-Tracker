import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CoinList from "./components/CoinList";

//Styles
import GlobalStyles from "./components/GlobalStyles";

//Components
import Search from "./components/Search";

function App() {
  //State
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  });

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <GlobalStyles />

      <Search search={search} setSearch={setSearch} />
      {filteredCoins.map((coin) => {
        return (
          <CoinList
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
