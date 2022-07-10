

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1 className="text-center">Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="mailto:galneufeld@gmail.com">Gali Neufeld </a>
            and is{" "}
            <a href="https://github.com/GaliNeufeld/dictionary-project" target="_blank" rel="no referrer noopener"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}


