import { useState, useEffect } from 'react';

export default function useWindowResize() {

    let [screenDimensions, setScreenDimensions] = useState([window.innerWidth, window.innerHeight]);

    const windowResizeListener = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setScreenDimensions([width, height]);
    }

// add scroll event listener
useEffect(() => {

    window.addEventListener("resize", windowResizeListener);

    // clean up resize event listener
    return(() => {
        window.removeEventListener("resize", windowResizeListener);
    });

}, []);
  return screenDimensions;
}
