import "./App.css";
import Card from "./components/Card";
import Carousel from "react-elastic-carousel";
import Image1 from "./assets/001.png";
import Image2 from "./assets/002.png";
import Image3 from "./assets/003.png";
import Image4 from "./assets/004.png";
import Image5 from "./assets/005.png";
import Image6 from "./assets/006.png";
import Image7 from "./assets/007.png";
import Image8 from "./assets/008.png";
import Image9 from "./assets/009.png";

function App() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];

  const style = {
    'max-width': '1440px'
  }

  return (
    <div>
      <h1>Carrossel</h1>
      <div className="container">
        <Carousel style={style} breakPoints={breakPoints}>
          <Card image={Image1} />
          <Card image={Image2} />
          <Card image={Image3} />
          <Card image={Image4} />
          <Card image={Image5} />
          <Card image={Image6} />
          <Card image={Image7} />
          <Card image={Image8} />
          <Card image={Image9} />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
