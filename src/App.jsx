import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definition from "./components/Definition";
import Header from "./components/Header";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meaning);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: "#ddacf5",
        color: "#27104e",
        margin: 0,
        padding: 0,
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        <Definition word={word} category={category} meaning={meaning} />
      </Container>
    </div>
  );
}

export default App;
