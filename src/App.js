import { useState, useEffect, useRef } from 'react'
import './App.css';
import { motion } from 'framer-motion'

import image1 from '../src/img/image1.webp'
import image2 from '../src/img/image2.webp'
import image3 from '../src/img/image3.webp'
import image4 from '../src/img/image4.jpg'
import image5 from '../src/img/image5.webp'

const images = [image1, image2, image3, image4, image5]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className='back'>
      <div className="App">
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map(image => (
              <motion.div className="item" key={image}>
                <img src={image} alt="Texto alt" />
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;