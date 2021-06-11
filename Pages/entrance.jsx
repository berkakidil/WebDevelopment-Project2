var WebDevelopment-Project2 = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="../Css/entrance.css" />
        <link rel="icon" href="../Images/Coinzzz.ico" />
        <title>Login</title>
        <header>
          <div className="header_title">
            <h1>Coinzzz</h1>
          </div>
        </header>
        <h2>Sıgn In</h2>
        <div className="centered">
          <form action="POST" className="entrance">
            <table>
              <tbody><tr>
                  <td><label htmlFor="email">E-mail</label></td>
                  <td><input className="input_entrance" type="text" id="email" name defaultValue maxLength={25} required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="password">Password </label></td>
                  <td><input className="input_entrance" type="password" id="password" name defaultValue maxLength={25} required /></td>
                </tr>
              </tbody></table>
            <button type="button" name="button" onclick="validate()">Sign In</button>
            <button type="button" onclick="location.href='registration.html'" name="button">Register</button>
          </form>
        </div>
        <footer>
          <p>Ozyegin University</p>
          <p>Group 11</p>
        </footer>
      </div>
    );
  }
});