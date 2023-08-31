import './App.scss';
import HeroSliderV1 from './herosliderv1/HeroSliderV1';

import { useState } from 'react';

function App() {
  const [ slideData, setSlideData ] = useState([
    {
      image: 'img-1.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-2.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-3.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-4.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-5.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-6.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-7.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-8.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-9.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
    {
      image: 'img-10.jpg',
      title: "Next-generation social platform for small businesses",
      description: "BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!"
    },
  ]);

  return (
    <div className="App">
      <HeroSliderV1 data={ [ ...slideData ] } maxTransSlides={ 5 } />
    </div>
  );
}

export default App;
