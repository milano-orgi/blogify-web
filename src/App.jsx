import React from "react";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
