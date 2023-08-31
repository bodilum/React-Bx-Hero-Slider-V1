import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import useWindowResize from '../hooks/useWindowResize';
import { shortenTxt } from '../utils/general';
import './hero-slider-v1.scss';

function HeroSliderV1({ data }) { 

  const minTransDur = 0.2;

  const [offsety, setOffsety] = useState(45); //
  const [titleLen, setTitleLen] = useState(60); //
  const [descLen, setDescLen] = useState(100); //

  const [screenWidth, screenHeight] = useWindowResize();
  useEffect(() => {
    let offset = 45;
    let len1 = 60;
    let len2 = 100;
    if(screenWidth >= 768) {
      offset = 65;
      len1 = 100;
      len2 = 150;
    }
    setOffsety(offset);
    setTitleLen(len1);
    setDescLen(len2);
  }, [screenWidth, screenHeight]);

  const [activeNav, setActiveNav] = useState(0);
  const prevActiveNav = useRef(activeNav);

  // function to change slider
  const nextSlide = async ( newInd ) => {
    prevActiveNav.current = activeNav;
    setActiveNav(() => newInd );
  }

  if( !data || !Array.isArray(data) || data.length <= 0) return <h1>There are no slides to display</h1>


    // framer motion specific animation variants
    const slideAnimVariants = {
      pos0: { opacity: 0, x: -100, y: 0, scale: 1, background: '#fff', zIndex: 0},
      active: { opacity: 1, x: 0, y: 0, scale: 1, background: '#ccc', zIndex: 3},
      next: { opacity: 1, x: 0, y: offsety, scale: 0.85, background: '#ddd', zIndex: 2},
      pos1: { opacity: 1, x: 0, y: (offsety + 35), scale: 0.75, background: '#eaeaea', zIndex: 1},
      pos2: { opacity: 1, x: 0, y: (offsety + 65), scale: 0.65, background: '#fbfbfb', zIndex: 0},
      pos3: { opacity: 0, x: 0, y: (offsety + 95), scale: 0.55, background: '#ffffff', zIndex: 0},
      pos4: { opacity: 0, x: 0, y: (offsety + 115), scale: 0.45, background: '#ffffff', zIndex: 0},
      infoPrev: { opacity: 0, x: -100, y: 0, zIndex: 0},
      infoActive: { opacity: 1, x: 0, y: 0, zIndex: 1},
      infoNext: { opacity: 0, x: 100, y: 0, zIndex: 0},
    };

  return (
    <div className="hero-slider-v1">
      <div className="main-area">
        <div className="image-section">
          {
            data.map( (slide, i) => {
              let moveForward = prevActiveNav.current < activeNav ? true : false;

              let initialAnim = ( i < prevActiveNav.current ) ? 'pos0' : (i === prevActiveNav.current ) ? 'active' : (i === (prevActiveNav.current + 1) ) ? 'next' : (i === (prevActiveNav.current + 2)) ? "pos1" : (i === (prevActiveNav.current + 3)) ? "pos2" : (i === (prevActiveNav.current + 4)) ? 'pos3' : 'pos4';

              let animateAnim = (i < activeNav ) ? 'pos0' : (i === activeNav ) ? 'active' : (i === (activeNav + 1) ) ? 'next' : (i === (activeNav + 2)) ? "pos1" : (i === (activeNav + 3)) ? "pos2" : (i === (activeNav + 4)) ? 'pos3' : 'pos4';

              let classSuffix = (i < activeNav ) ? '__pos0' : (i === activeNav ) ? '__active' : (i === (activeNav + 1) ) ? '__next' : (i === (activeNav + 2)) ? '__pos1' : (i === (activeNav + 3)) ? '__pos2' : '';

            return <motion.div className={`image-slide${ classSuffix }`} key={ i } onClick={ () => nextSlide( i )} variants={slideAnimVariants} initial={ initialAnim } animate={ animateAnim } transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}> <img src={`images/${ data[ i ].image}`} alt={ data[ i ].title} loading="lazy" /> </motion.div> 
          })

          }
        
        </div>

        <div className="info-section">
          {
            data.map( (slide, i) => {

            let initialAnim = ( i < prevActiveNav.current ) ? 'infoPrev' : (i === prevActiveNav.current ) ? 'infoActive' :  'infoNext';
            let animateAnim = (i < activeNav ) ? 'infoPrev' : (i === activeNav ) ? 'infoActive' : 'infoNext';

            return (<motion.div className="slide-info" key={ i } variants={slideAnimVariants} initial={ initialAnim } animate={ animateAnim } transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: 0.1 }}>
              <h2>{ shortenTxt( i + data[ i ].title, titleLen ) }</h2><p>{ shortenTxt( data[ i ].description, descLen ) }</p>
            </motion.div>)

            })
          }
            <a href="">Get Started</a>
        </div>
      </div>
      <nav>
          {
            data.map((v, i) => <button key={ i } className={ i===activeNav ? 'active' : '' } onClick={ () => nextSlide(i) } />)
          }
      </nav>
    </div>
  )
}

export default HeroSliderV1