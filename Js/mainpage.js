function buy_coins(number_id) {

  var invalid_amount_error = "Select an proper amount to buy coins please!\nValues greater than 0 are valid";
  var enough_balance_error = "There is no enough money in your account!";
  user = sessionStorage.getItem("user_mail");
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  user_price = user_storage_parsed.price;

  if (number_id === "buy_number_gokselcoin") {
    const amount_buy = document.getElementById("buy_number_gokselcoin").value;
    if (amount_buy == "" || amount_buy <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("goksel_coin");
    } else {
      const val_goksel = document.getElementById("buy_value_gokselcoin").innerText;
      buy_value_goksel = val_goksel.slice(1, val_goksel.length);
      if (user_price > (Number(amount_buy) * Number(buy_value_goksel))) {
        user_storage_parsed.goksel_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_goksel))
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("goksel", user);
      } else {
        window.alert(enough_balance_error);
        clear_inputs("goksel_coin");
      }
    }
  } else if (number_id === "buy_number_berkcoin") {
    const amount_buy = document.getElementById("buy_number_berkcoin").value;
    if (amount_buy == "" || amount_buy <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("berk_coin");
    } else {
      const val_berk = document.getElementById("buy_value_berkcoin").innerText;
      buy_value_berk = val_berk.slice(1, val_berk.length);
      if (user_price > (Number(amount_buy) * Number(buy_value_berk))) {
        user_storage_parsed.berk_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_berk))
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("berk", user);
      } else {
        window.alert(enough_balance_error);
        clear_inputs("berk_coin");
      }
    }
  } else if (number_id === "buy_number_nurettincoin") {
    const amount_buy = document.getElementById("buy_number_nurettincoin").value;
    if (amount_buy == "" || amount_buy <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("nurettin_coin");
    } else {
      const val_nurettin = document.getElementById("buy_value_nurettincoin").innerText;
      buy_value_nurettin = val_nurettin.slice(1, val_nurettin.length);
      if (user_price > (Number(amount_buy) * Number(buy_value_nurettin))) {
        user_storage_parsed.nurettin_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_nurettin))
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("nurettin", user);
      } else {
        window.alert(enough_balance_error);
        clear_inputs("nurettin_coin");
      }
    }
  } else if (number_id === "buy_number_denizcoin") {
    const amount_buy = document.getElementById("buy_number_denizcoin").value;
    if (amount_buy == "" || amount_buy <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("deniz_coin");
    } else {
      const val_deniz = document.getElementById("buy_value_denizcoin").innerText;
      buy_value_deniz = val_deniz.slice(1, val_deniz.length);
      if (user_price > (Number(amount_buy) * Number(buy_value_deniz))) {
        user_storage_parsed.deniz_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_deniz))
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("deniz", user);
      } else {
        window.alert(enough_balance_error);
        clear_inputs("deniz_coin");
      }
    }
  }
}

function sell_coins(number_id) {
  var invalid_amount_error = "Select an proper amount to buy coins please!\nValues greater than 0 are valid";
  user = sessionStorage.getItem("user_mail");
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  user_goksel_coin = user_storage_parsed.goksel_coin;
  user_berk_coin = user_storage_parsed.berk_coin;
  user_nurettin_coin = user_storage_parsed.nurettin_coin;
  user_deniz_coin = user_storage_parsed.deniz_coin;

  if (number_id === "sell_number_gokselcoin") {
    const amount_sell = document.getElementById("sell_number_gokselcoin").value;
    if (amount_sell == "" || amount_sell <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("goksel_coin");
    } else {
      if (user_goksel_coin >= amount_sell) {
        user_storage_parsed.goksel_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 10)
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("goksel", user);
      } else {
        enough_amount_error("goksel");
        clear_inputs("goksel_coin");
      }
    }
  } else if (number_id === "sell_number_berkcoin") {
    const amount_sell = document.getElementById("sell_number_berkcoin").value;
    if (amount_sell == "" || amount_sell <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("berk_coin");
    } else {
      if (user_berk_coin >= amount_sell) {
        user_storage_parsed.berk_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 20)
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("berk", user);
      } else {
        enough_amount_error("berk");
        clear_inputs("berk_coin");
      }
    }
  } else if (number_id === "sell_number_nurettincoin") {
    const amount_sell = document.getElementById("sell_number_nurettincoin").value;
    if (amount_sell == "" || amount_sell <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("nurettin_coin");
    } else {
      if (user_nurettin_coin >= amount_sell) {
        user_storage_parsed.nurettin_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 5)
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("nurettin", user);
      } else {
        enough_amount_error("nurettin");
        clear_inputs("nurettin_coin");
      }
    }
  } else if (number_id === "sell_number_denizcoin") {
    const amount_sell = document.getElementById("sell_number_denizcoin").value;
    if (amount_sell == "" || amount_sell <= 0) {
      window.alert(invalid_amount_error);
      clear_inputs("deniz_coin");
    } else {
      if (user_deniz_coin >= amount_sell) {
        user_storage_parsed.deniz_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 7)
        localStorage.setItem(user, JSON.stringify(user_storage_parsed));
        update_sidebar("deniz", user);
      } else {
        enough_amount_error("deniz");
        clear_inputs("deniz_coin");
      }
    }
  }
}

function update_sidebar(coin_name, user_data) {
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  user_goksel_coin = user_storage_parsed.goksel_coin;
  user_berk_coin = user_storage_parsed.berk_coin;
  user_nurettin_coin = user_storage_parsed.nurettin_coin;
  user_deniz_coin = user_storage_parsed.deniz_coin;

  if (coin_name == "goksel") {
    user_goksel_coin = user_storage_parsed.goksel_coin;
    document.getElementById("coins").innerText = "Goksel Coin: " + user_goksel_coin + " - Berk Coin: " + user_berk_coin + "\n Nurettin Coin: " + user_nurettin_coin + " - Deniz Coin: " + user_deniz_coin;
    user_price = user_storage_parsed.price;
    document.getElementById("price").innerText = "₺" + user_price;
    clear_inputs("goksel_coin");
  } else if (coin_name == "berk") {
    user_berk_coin = user_storage_parsed.berk_coin;
    document.getElementById("coins").innerText = "Goksel Coin: " + user_goksel_coin + " - Berk Coin: " + user_berk_coin + "\n Nurettin Coin: " + user_nurettin_coin + " - Deniz Coin: " + user_deniz_coin;
    user_price = user_storage_parsed.price;
    document.getElementById("price").innerText = "₺" + user_price;
    clear_inputs("berk_coin");
  } else if (coin_name == "nurettin") {
    user_nurettin_coin = user_storage_parsed.nurettin_coin;
    document.getElementById("coins").innerText = "Goksel Coin: " + user_goksel_coin + " - Berk Coin: " + user_berk_coin + "\n Nurettin Coin: " + user_nurettin_coin + " - Deniz Coin: " + user_deniz_coin;
    user_price = user_storage_parsed.price;
    document.getElementById("price").innerText = "₺" + user_price;
    clear_inputs("nurettin_coin");
  } else if (coin_name == "deniz") {
    user_deniz_coin = user_storage_parsed.deniz_coin;
    document.getElementById("coins").innerText = "Goksel Coin: " + user_goksel_coin + " - Berk Coin: " + user_berk_coin + "\n Nurettin Coin: " + user_nurettin_coin + " - Deniz Coin: " + user_deniz_coin;
    user_price = user_storage_parsed.price;
    document.getElementById("price").innerText = "₺" + user_price;
    clear_inputs("deniz_coin");
  }
}

function information(){
  user = sessionStorage.getItem("user_mail");
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  user_price = user_storage_parsed.price;
  name = sessionStorage.getItem("user_name");
  last_name = sessionStorage.getItem("user_lastname");
  goksel_coin = user_storage_parsed.goksel_coin;
  berk_coin =  user_storage_parsed.berk_coin;
  nurettin_coin = user_storage_parsed.nurettin_coin;
  deniz_coin = user_storage_parsed.deniz_coin;
  document.getElementById("user_name").innerText = name;
  document.getElementById("last_name").innerText = last_name;
  document.getElementById("price").innerText = "₺"+user_price;
  document.getElementById("coins").innerText = "Goksel Coin: "+ goksel_coin + " - Berk Coin: " + berk_coin + "\n Nurettin Coin: " + nurettin_coin + " - Deniz Coin: " + deniz_coin;
}

function clear_inputs(coin_name){
  if(coin_name == "goksel_coin"){
    document.getElementById("sell_number_gokselcoin").value = "";
    document.getElementById("buy_number_gokselcoin").value = "";
  }
  else if(coin_name == "berk_coin"){
    document.getElementById("sell_number_berkcoin").value = "";
    document.getElementById("buy_number_berkcoin").value = "";
  }
  else if(coin_name == "nurettin_coin"){
    document.getElementById("sell_number_nurettincoin").value = "";
    document.getElementById("buy_number_nurettincoin").value = "";
  }
  else if(coin_name == "deniz_coin"){
    document.getElementById("sell_number_denizcoin").value = "";
    document.getElementById("buy_number_denizcoin").value = "";
  }
}
function sign_out(){
  sessionStorage.clear();
  window.location.href = "../Html/entrance.html";
}
function add_balance(){
  user = sessionStorage.getItem("user_mail");
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  user_storage_parsed.price += 100;
  localStorage.setItem(user, JSON.stringify(user_storage_parsed));
  user_price = user_storage_parsed.price;
  document.getElementById("price").innerText = "₺" + user_price;
  window.alert("₺100 is deposited to your balance");
}
function remove_balance(){
  user = sessionStorage.getItem("user_mail");
  user_storage = localStorage.getItem(user);
  user_storage_parsed = JSON.parse(user_storage);
  if(user_price >=100){
    user_storage_parsed.price -= 100;
  }

  localStorage.setItem(user, JSON.stringify(user_storage_parsed));
  user_price = user_storage_parsed.price;
  document.getElementById("price").innerText = "₺" + user_price;
  window.alert("₺100 is withdrawn from your balance");
}

function enough_amount_error(coins_name){
  if(coins_name == "goksel"){
    window.alert("There is no enough 'Goksel Coin' in your account!");
  }
  else if(coins_name == "berk"){
    window.alert("There is no enough 'Berk Coin' in your account!");
  }
  else if(coins_name == "nurettin"){
    window.alert("There is no enough 'Nurettin Coin' in your account!");
  }
  else if(coins_name == "deniz"){
    window.alert("There is no enough 'Deniz Coin' in your account!");
  }
}
