import Navbar from './components/Navbar';
import GlobalStyles from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';

function App() {

  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection { ...InfoData }/>
    </>
  );
}

export default App;
