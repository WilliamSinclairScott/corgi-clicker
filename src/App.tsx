import { useEffect, useState } from "react";
import "./App.css";
import getCorgi from "./services/api";
import emailjs from "@emailjs/browser";

function App() {
  const [count, setCount] = useState(0);
  const [corgi, setCorgi] = useState("");
  useEffect(() => {
    getCorgi().then((data) => {
      setCorgi(data.message);
    });
    emailjs.init({
      publicKey: "LYXAyujnU3l-YVifg",
    });
  }, [count, setCorgi]);

  const handleClicking = async () => {
    getCorgi()
      .then((data) => setCorgi(data.message))
      .then(() => setCount(count + 1));
    if (count === 2) {
      emailjs.send("service_b4xdu89", "template_ot9nrsx").then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    }
  };
  return (
    <>
      <div className="main">
        <h1>Corgi Clicker</h1>
        <p>You've found {`${count}`} new pictures, I hope you're happy</p>
        <button onClick={() => handleClicking()}>Get New Corgi</button>
        <img className="picture" src={corgi} alt="Corgi" />
      </div>
    </>
  );
}

export default App;
