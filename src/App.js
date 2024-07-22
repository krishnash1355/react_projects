import "./App.css";
import Accordion from "./Components/accordian";
import ImageSlider from "./Components/image-slider";
import RandomColor from "./Components/random-color";
import Star from "./Components/star_rating";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordion>Aaja</Accordion>
      {/* Random Color Component */}
      <RandomColor></RandomColor>
      {/* star Rating */}
      <Star></Star>
      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
