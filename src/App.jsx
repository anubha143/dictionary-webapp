import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [word, setWord] = useState();
  const [meaning, setMeaning] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/sweet"
      );
      setMeaning(data.data[0].meanings[0].definitions[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meaning);
  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#ddacf5", color: "#27104e" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
