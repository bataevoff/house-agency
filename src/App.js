import Navbar from './components/Navbar';
import GlobalStyles from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Dropdown />
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
