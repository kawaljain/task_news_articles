import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TextField from "./components/TextField";
import List from "./components/List";
import useNewsSearch from "./hooks/useNewSearch";
import { useState } from "react";
import Loader from "./components/Loader";
import ErrorLayout from "./components/ErrorLayout";

function App() {
  const [search, setSearch] = useState();
  const [input, setInput] = useState();
  const { articles, loading, error } = useNewsSearch(search);

  const onSearchClick = () => {
    setSearch(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearchClick();
    }
  };

  const handleClearSearch = () => {
    setSearch("");
    setInput("");
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="jumbotron ">
          <div className="container">
            <h1 className="jumbotron-heading">Search News</h1>

            <TextField
              onChangeHandler={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              value={input}
            />

            <div className="btn btn-primary my-2 mx-2 " onClick={onSearchClick}>
              Search
            </div>
            <div
              className="btn btn-secondary my-2 mx-2"
              onClick={handleClearSearch}
            >
              Clear Data
            </div>
          </div>
        </section>

        <div className="mt-5 py-5 bg-light">
          <div className="container">
            <div className="row mb-4">
              <h2>Articles List</h2>
            </div>
            <div className="row">
              {loading ? (
                <Loader />
              ) : error ? (
                <ErrorLayout errorMsg={error} />
              ) : articles.length > 0 ? (
                articles.map((article) => {
                  return <List article={article} key={article.title} />;
                })
              ) : (
                <p>{`${
                  search
                    ? `No articles for particular user -${search}.`
                    : "Need to Search for an User."
                }`}</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
