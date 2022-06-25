import { MainContainer } from "./Global.Style";
import Nav from "./Components/Nav/Nav";
import Slider from "./Components/Slider/Slider";
import { Line } from "./Components/Line/Line";
// My pages of proShop
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";

function App() {
  return (
    <MainContainer className="App">
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </MainContainer>
  );
}

export default App;
