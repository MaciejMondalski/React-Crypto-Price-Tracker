import styled from "styled-components";

const CoinList = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <CoinContainer>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-volume">${volume.toLocaleString()}</p>

          <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </CoinContainer>
  );
};

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;

  .coin-row {
    display: flex;
    flex-direction: row;
    justify-items: start;
    align-items: center;
    height: 3.5rem;
    border-bottom: 1px solid #6c6c6c;
    width: 75vw;
    &:hover {
      background: #222332;
      z-index: 5;
    }
  }

  .coin {
    flex: 3;
    display: flex;
    align-items: center;
    min-width: 30rem;
    &:hover {
    }

    h1 {
      font-size: 1.2rem;
      width: 50%;
    }

    img {
      height: 2rem;
      width: 2rem;
    }
  }

  .coin-data {
    flex: 4;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    min-width: 30rem;
  }

  .coin-symbol {
    text-transform: uppercase;
  }

  .coin-volume {
  }

  .coin-marketcap {
  }

  .red {
    color: #e22134;
  }

  .green {
    color: #20bf71;
  }
`;

export default CoinList;
