import Background from "./components/Background";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import "./sass/style.scss";

function App() {
  return (
    <div className="backgroundImg">
      <Hero />
      <Featured />
      <Contact />
    </div>
  );
}

export default App;
