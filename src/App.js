import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TextField from "./components/TextField";
import List from "./components/List";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="jumbotron ">
          <div className="container">
            <h1 className="jumbotron-heading">Search News</h1>

            <TextField />

            <p>
              <div className="btn btn-primary my-2 mx-2">Search</div>
              <div className="btn btn-secondary my-2 mx-2">Clear Data</div>
            </p>
          </div>
        </section>
        <div></div>
        <div className=" py-5 bg-light">
          <div className="container">
            <div className="row mb-4">
              <h2>News List</h2>
            </div>
            <div className="row">{true ? <>loader</> : <List />}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
