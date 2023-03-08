import {useState } from 'react';
import './App.css';
import CryptoService from './API/CryptoService';
function App() {
  // create an input box
  // pass the input to api call
  // display the encrypted message;
  let [input, setInput] = useState("");
  let [encryptedMessage, setEncryptedMessage] = useState("");
  let response = "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(input);
  };

  let handleClick = () => {
    CryptoService.encrypt(input).then(res => response = JSON.stringify(res.data)).catch(e => console.log(e));
    setEncryptedMessage(response)
  };
  return (
    <div className="App">
      <label htmlFor="name">Enter your password:</label>

      <input type="text" id="name" name="name" required value={input}
        onChange={handleInputChange} />
      <button onClick={handleClick} type="button">Encrypt</button>
      <p>{encryptedMessage}</p>
    </div>
  );
}

export default App;
