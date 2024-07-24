import "./App.css";
import Accordion from "./Components/accordian";
import data from "./Components/accordian/data";
import ImageSlider from "./Components/image-slider";
import LoadMoreData from "./Components/load-more-data";
import AddMoreData from "./Components/load-more-data";
import QRCodeGenerator from "./Components/qr-code-generator";
import RandomColor from "./Components/random-color";
import Star from "./Components/star_rating";
import TreeView from "./Components/tree-view";
import menus from "./Components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component  */}
      {/* /* <LoadMoreData/> */}

      {/* Tree View Component/ Menu UI component/ Recursive Menu Component */}
      {/* <TreeView menus={menus}></TreeView> */}

      <QRCodeGenerator></QRCodeGenerator>
    </div>
  );
}

export default App;
