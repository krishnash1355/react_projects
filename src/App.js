import './App.css';
import Accordion from './Components/accordian';
import RandomColor from './Components/random-color';
import Star from './Components/star_rating';

function App() {
  return (
    <div className="App">
    {/* Accordian */}
    <Accordion>Aaja</Accordion>
    {/* Random Color Component */}
    <RandomColor></RandomColor>
    {/* star Rating */}
    <Star></Star>
    </div>
  );
}

export default App;
