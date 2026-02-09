import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

// Lazy load heavy components
const CircularGallery = lazy(() => import('./components/CircularGallery'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const TargetCursor = lazy(() => import('./components/TargetCursor'));
const ProductCatalog = lazy(() => import('./components/ProductCatalog'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const MachineBlueprint = lazy(() => import('./components/MachineBlueprint'));

// Wrapper to handle scroll preservation on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    return !hasSeenIntro;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {!showIntro && (
        <>
          <Hero />
          <Suspense fallback={<div className="h-screen bg-blueprint-bg" />}>
            <MachineBlueprint />
          </Suspense>
          <ProductShowcase />

          <div className="pt-32 pb-16 text-center blueprint-bg relative overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="relative h-64 flex items-center justify-center">
                {/* Rolling Gear Wheel - moves from right to left */}
                <motion.div
                  initial={{ x: '150%', rotate: 0 }}
                  whileInView={{ x: '-20%', rotate: -720 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 2.5,
                    ease: [0.22, 1, 0.36, 1],
                    rotate: { duration: 2.5, ease: "linear" }
                  }}
                  className="absolute right-0 z-30 pointer-events-none"
                >
                  {/* Large Industrial Gear Wheel */}
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    {/* Main gear body */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_4px_8px_rgba(255,255,255,0.3),inset_0_-4px_8px_rgba(0,0,0,0.4)]" />

                    {/* Center hub */}
                    <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_0_20px_rgba(59,130,246,0.4)] border-4 border-slate-500/50">
                      {/* Center hole */}
                      <div className="absolute inset-[30%] rounded-full bg-slate-950 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9)]" />
                      {/* Phillips cross in center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-1 bg-slate-900/80 absolute" />
                        <div className="w-1 h-8 bg-slate-900/80 absolute" />
                      </div>
                    </div>

                    {/* Gear teeth around the edge */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-full"
                        style={{ transform: `rotate(${i * 30}deg)` }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                          style={{
                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                            transformOrigin: 'center bottom'
                          }}
                        />
                      </div>
                    ))}

                    {/* Metallic shine overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Rotating inner ring pattern */}
                    <div className="absolute inset-[15%] rounded-full opacity-40">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`ring-${i}`}
                          className="absolute w-full h-full"
                          style={{ transform: `rotate(${i * 45}deg)` }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[15%] bg-slate-300" />
                        </div>
                      ))}
                    </div>

                    {/* Blue glow effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl animate-pulse" />
                  </div>
                </motion.div>

                {/* Text that trails behind the wheel */}
                <div className="relative z-20 overflow-hidden w-full">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 2,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase relative">
                      {/* Word "Our" */}
                      <motion.span
                        initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(148,163,184,0.5)]"
                      >
                        Our
                      </motion.span>
                      {' '}
                      {/* Word "Industry" */}
                      <motion.span
                        initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent italic drop-shadow-[0_2px_12px_rgba(59,130,246,0.6)]"
                      >
                        Industry
                      </motion.span>
                      <br />
                      {/* Word "Partners" */}
                      <motion.span
                        initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent italic drop-shadow-[0_2px_12px_rgba(59,130,246,0.6)]"
                      >
                        Partners
                      </motion.span>
                    </h2>

                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "120px", opacity: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-2 bg-gradient-to-r from-slate-400 via-blue-400 to-slate-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] mx-auto mt-6"
                    />
                  </motion.div>
                </div>

                {/* Engraving trail effect - particles left behind by the wheel */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      initial={{ opacity: 0, scale: 0, x: '100%' }}
                      whileInView={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                        x: [`${100 - i * 5}%`, `${50 - i * 5}%`, `${-i * 5}%`]
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: 2,
                        delay: 0.5 + i * 0.05,
                        ease: "easeOut"
                      }}
                      className="absolute top-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${45 + Math.random() * 10}%`
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="cursor-target blueprint-bg relative" style={{ height: '600px', position: 'relative' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
            <CircularGallery
              items={[
                { image: '/images/gallery/br-1.png', text: 'McDonalds' },
                { image: '/images/gallery/br-2.png', text: 'Unilever' },
                { image: '/images/gallery/br-3.png', text: 'Oreo' },
                { image: '/images/gallery/br-4.png', text: 'Baskin Robbins' },
                { image: '/images/gallery/br-5.png', text: 'Fanta' }
              ]}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
          <Services />
          <Gallery />
          <Contact />
        </>
      )}
    </>
  );
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-foreground/60 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300">
        <Suspense fallback={null}>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn={false}
            hoverDuration={0.2}
          />
        </Suspense>
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductCatalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
