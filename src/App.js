import owl from "./owl.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={owl} className="owl-image img-fluid" alt="owl" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Gali Neufeld</small>
        </footer>
      </div>
    </div>
  );
}


