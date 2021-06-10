<>
  <meta charSet="utf-8" />
  <title>Main Page</title>
  <link rel="stylesheet" type="text/css" href="../Css/mainpage.css" />
  <link rel="icon" href="../Images/Coinzzz.ico" />
  <header>
    <h1>Coinzzz</h1>
  </header>
  <div className="sidebar">
    <label className="label_side" htmlFor="user_name">First name</label>
    <h3 id="user_name">
    </h3>
    <label className="label_side" htmlFor="last_name">Last name</label>
    <h3 id="last_name"> </h3>
    <label className="label_side" htmlFor="price">Balance</label>
    <h3 id="price"> </h3>
    <label className="label_side" htmlFor="coins">Coins owned</label>
    <h3 id="coins"> </h3>
    <ul>
      <li><img src="../Images/goksel_coin.png" width={20} height={20} alt="göksel_coin" />
        <label htmlFor="sellcoin">Gökselcoin GKK</label>
        <br />
        <input className="sell_number_field" id="sell_number_gokselcoin" type="number" placeholder="amount" min={0} max={100} />
        <button className="sell_button" type="button" name="button" onclick="sell_coins('sell_number_gokselcoin')">Sell</button>
        <span id="sell_value_gokselcoin">₺10</span>
      </li>
      <br />
      <li><img src="../Images/SmallBerkCoin.png" alt="berk_coin" />
        <label htmlFor="sellcoin">Berkcoin BRK</label>
        <br />
        <input className="sell_number_field" id="sell_number_berkcoin" type="number" placeholder="amount" min={0} max={100} />
        <button className="sell_button" type="button" name="button" onclick="sell_coins('sell_number_berkcoin')">Sell</button>
        <span id="sell_value_berkcoin">₺20</span>
      </li>
      <br />
      <li><img src="../Images/nurettin_coin.png" alt="nurettin_coin" width={20} height={20} />
        <label htmlFor="sellcoin">Nurettincoin</label>
        <br />
        <input className="sell_number_field" id="sell_number_nurettincoin" type="number" placeholder="amount" min={0} max={100} />
        <button className="sell_button" type="button" name="button" onclick="sell_coins('sell_number_nurettincoin')">Sell</button>
        <span id="sell_value_nurettincoin">₺5</span>
      </li>
      <br />
      <li><img src="../Images/deniz_coin.png" alt="deniz_coin" width={20} height={20} />
        <label htmlFor="sellcoin">Denizcoin</label>
        <br />
        <input className="sell_number_field" id="sell_number_denizcoin" type="number" placeholder="amount" min={0} max={100} />
        <button className="sell_button" type="button" name="button" onclick="sell_coins('sell_number_denizcoin')">Sell</button>
        <span id="sell_value_denizcoin">₺7</span>
      </li>
      <li>
        <button className="sign_out" type="button" name="button" onclick="sign_out()">Sign Out</button>
      </li>
    </ul>
  </div>
  <div className="middle">
    <ul>
      <li><img src="../Images/goksel_coin.png" width={20} height={20} alt="göksel_coin" />
        <a href="goksel_coin.html">Gökselcoin GKK</a><br />
        <input className="number_field" id="buy_number_gokselcoin" type="number" placeholder="amount" min={0} max={100} />
        <button type="button" name="buy_coin" id="buy_button_gokselcoin" onclick="buy_coins('buy_number_gokselcoin')">Buy</button>
        <span id="buy_value_gokselcoin">₺15</span>
        <hr />
      </li>
      <br />
      <li><img src="../Images/SmallBerkCoin.png" alt="berk_coin" />
        <a href="berk_coin.html">Berkcoin BRK</a><br />
        <input className="number_field" id="buy_number_berkcoin" type="number" placeholder="amount" min={0} max={100} />
        <button type="button" name="buy_coin" id="buy_button_berkcoin" onclick="buy_coins('buy_number_berkcoin')">Buy</button>
        <span id="buy_value_berkcoin">₺25</span>
        <hr />
      </li>
      <br />
      <li><img src="../Images/nurettin_coin.png" alt="nurettin_coin" width={20} height={20} />
        <a href="nurettin_coin.html">Nurettin Coin</a><br />
        <input className="number_field" id="buy_number_nurettincoin" type="number" placeholder="amount" min={0} max={100} />
        <button type="button" name="buy_coin" id="buy_button_nurettincoin" onclick="buy_coins('buy_number_nurettincoin')">Buy</button>
        <span id="buy_value_nurettincoin">₺7</span>
        <hr />
      </li>
      <br />
      <li><img src="../Images/deniz_coin.png" alt="deniz_coin" width={20} height={20} />
        <a href="deniz_coin.html">Deniz Coin</a><br />
        <input className="number_field" id="buy_number_denizcoin" type="number" placeholder="amount" min={0} max={100} />
        <button type="button" name="buy_coin" id="buy_button_denizcoin" onclick="buy_coins('buy_number_denizcoin')">Buy</button>
        <span id="buy_value_denizcoin">₺9</span>
        <hr />
      </li>
    </ul>
  </div>
  <div className="bottom_div">
    <ul>
      <li>
        <button id="add_balance" className="update_balance" type="button" name="button" onclick="add_balance()">₺100 Deposit</button>
        <button className="update_balance" type="button" name="button" onclick="remove_balance()">₺100 Withdraw</button>
      </li>
    </ul>
  </div>
  <footer>
    <p>Ozyegin University</p>
    <p>Group 11</p>
  </footer>
</>
