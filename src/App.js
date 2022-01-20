import Background from "./components/Background";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./sass/style.scss";

function App() {
  return (
    <div className="backgroundImg">
      <Header />
      <Hero />
      <Featured />
      <Contact />
    </div>
  );
}

export default App;
