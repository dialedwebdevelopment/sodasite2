import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { View, Float, OrbitControls, Environment } from '@react-three/drei';
import Model2 from '../Model2';
import Model3 from '../Model3';
import { Loading } from '../Loading';
import { motion, AnimatePresence } from 'framer-motion';

export const Section4 = () => {
  const view1 = useRef();
  const view2 = useRef();
  const ref = useRef();
  const ref2 = useRef();

  const [isMobile, setIsMobile] = useState(false);
  const [hoveredContainer, setHoveredContainer] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='four'>
      <div className='four-content'>
        <h1 className='four-title'>PRODUCTS</h1>
        <div className='available-in'>
          <h1 className='available-in-text'>AVAILABLE AT</h1>
          <div className='logos'>
            <div className='logos-slide'>
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
            </div>
            <div className='logos-slide'>
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
              <img src='./dw2.png' />
              <img src='./dw.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='four-experience'>
        <div className='four-container'>
          <AnimatePresence>
            {hoveredContainer === 'mango' && (
              <motion.div
                className='motion-image-left'
                initial={{ x: '100%', scale: 0, opacity: 0 }}
                animate={{ x: '0%', scale: 1, opacity: 1, y: [0, -10, 0] }}
                exit={{ x: '100%', scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, y: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } }}
              >
                <motion.img
                  src='./splashr3.png'
                  className='motion-image-inside'
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hoveredContainer === 'mango' && (
              <motion.div
                className='motion-image-right'
                initial={{ x: '-100%', scale: 0, opacity: 0 }}
                animate={{ x: '0%', scale: 1, opacity: 1, y: [0, -10, 0] }}
                exit={{ x: '-100%', scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, y: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } }}
              >
                <motion.img
                  src='./mangr.png'
                  className='motion-image-inside'
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className='four-container-content' ref={ref} onMouseEnter={() => setHoveredContainer('mango')} onMouseLeave={() => setHoveredContainer(null)}>
            <div className="four-container-bottom">
              <h1 className='four-container-text'>MANGO BLAST</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='wave-button'
              >
                <h1 className='button-text'>ORDER NOW</h1>
                <div className='wave' />
              </motion.button>
            </div>
          </div>
          <div ref={view1} className='view' style={{ height: '100%', width: '50vw' }} />
          <div className='mobile-scroll' />
          <Canvas eventSource={ref} className='canvas'>
            <View track={view1}>
              <Suspense fallback={<Loading />}>
                <Float speed={2}>
                  <Model2 position={[0, 0, 0]} />
                </Float>
              </Suspense>
              <Environment preset='warehouse' />
            </View>
          </Canvas>
        </div>
        <div className='four-container'>
          <AnimatePresence>
            {hoveredContainer === 'cherry' && (
              <motion.div
                className='motion-2-image-right'
                initial={{ x: '-100%', scale: 0, opacity: 0 }}
                animate={{ x: '0%', scale: 1, opacity: 1, y: [0, -10, 0] }}
                exit={{ x: '-100%', scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, y: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } }}
              >
                <motion.img
                  src='./ice.png'
                  className='motion-image-inside'
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hoveredContainer === 'cherry' && (
              <motion.div
                className='motion-2-image-left'
                initial={{ x: '100%', scale: 0, opacity: 0 }}
                animate={{ x: '0%', scale: 1, opacity: 1, y: [0, -10, 0] }}
                exit={{ x: '100%', scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, y: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } }}
              >
                <motion.img
                  src='./cherryr.png'
                  className='motion-image-inside'
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className='four-container-content' ref={ref2} onMouseEnter={() => setHoveredContainer('cherry')} onMouseLeave={() => setHoveredContainer(null)}>
            <div className="four-container-bottom">
              <h1 className='four-container-text'>BLACK CHERRY</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='wave-button'
              >
                <h1 className='button-text'>ORDER NOW</h1>
                <div className='wave' />
              </motion.button>
            </div>
          </div>
          <div ref={view2} className='view' style={{ height: '100%', width: '50vw' }} />
          <div className='mobile-scroll' />
          <Canvas eventSource={ref2} className='canvas'>
            <View track={view2}>
              <Suspense fallback={<Loading />}>
                <Float speed={2}>
                  <Model3 />
                </Float>
              </Suspense>
              <Environment preset='warehouse' />
            </View>
          </Canvas>
        </div>
      </div>
    </section>
  );
};
