<>
  <meta charSet="utf-8" />
  <title>Registration</title>
  <link rel="stylesheet" type="text/css" href="../Css/registration.css" />
  <link rel="icon" href="../Images/Coinzzz.ico" />
  <header>
    <h1>Coinzzz</h1>
  </header>
  <h2>Create account</h2>
  <div className>
    <form className action="index.html" method="post">
      <table>
        <tbody><tr>
            <td><label htmlFor="text_firstname">First Name </label></td>
            <td><input className="input_text" type="text" id="text_firstname" name defaultValue maxLength={25} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="text_lastname">Last Name </label></td>
            <td><input className="input_text" type="text" id="text_lastname" name defaultValue maxLength={25} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="text_email">E-mail </label></td>
            <td><input className="input_text" type="email" id="text_email" name defaultValue required /></td>
          </tr>
          <tr>
            <td><label htmlFor="text_password">Password </label></td>
            <td><input className="input_text" type="password" id="text_password" name defaultValue minlegth={6} maxLength={25} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="text_phone">Phone </label></td>
            <td><input className="input_text" type="text" id="text_phone" name defaultValue minlegth={11} maxLength={11} placeholder="(0XXX-XXX-XXXX)" required /></td>
          </tr>
          <tr>
            <td><label htmlFor="birthdate">Birthdate</label></td>
            <td><input className="input_text" type="date" id="text_birthdate" name defaultValue max="2003-01-01" required /></td>
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <td><label htmlFor="radio">Gender</label></td>
            <td><input className="radio_button" type="radio" id="male" name="gender" /> <label htmlFor="male">Male</label></td>
            <td><input className="radio_button" type="radio" id="female" name="gender" /> <label htmlFor="female">Female</label>
            </td>
            <td><input className="radio_button" type="radio" id="other" name="gender" /> <label htmlFor="other">Other</label></td>
          </tr>
        </tbody></table>
      <button type="button" name="button" onclick="register()">Register</button>
      <button type="button" onclick="location.href='entrance.html'" name="button">Log in</button>
    </form>
  </div>
  <footer>
    <p>Ozyegin University</p>
    <p>Group 11</p>
  </footer>
</>
