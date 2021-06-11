var WebDevelopment-Project2 = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Göksel Coin</title>
        <link rel="stylesheet" href="../Css/goksel_coin.css" />
        <link rel="icon" href="../Images/goksel_coin.ico" />
        <header>
          <h1>Göksel Coin </h1>
        </header>
        <div className="title">
          <h2>Gökselcoin Value(GKK)</h2>
        </div>
        <img src="../Images/goksel_coin.png" alt="goksel_coin" />
        <p className="description">Göksel coin is a cryptocurrency that is produced by business man from Samsun, Turkey.
          Coin's name comes from the name of its owner. Göksel coin challenges the wall street with its rapidly rising and increasing value.
          Current value of this coin is ₺15 but after a year, according to estimations, its value will be a million turkish liras.</p>
        <footer className="footer">
          <p>Ozyegin University</p>
          <p>Group 11</p>
        </footer>
      </div>
    );
  }
});