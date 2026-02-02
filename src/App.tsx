import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import ParallaxFeature from './components/ParallaxFeature';

// Lazy load heavy components
const CircularGallery = lazy(() => import('./components/CircularGallery'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Events = lazy(() => import('./components/Events'));
const Contact = lazy(() => import('./components/Contact'));
const TargetCursor = lazy(() => import('./components/TargetCursor'));
const ProductCatalog = lazy(() => import('./components/ProductCatalog'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

// Wrapper to handle scroll preservation on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <ParallaxFeature />
      <ProductShowcase />

      <div className="pt-32 pb-8 text-center bg-background">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black tracking-tighter uppercase"
        >
          Our <span className="text-primary italic">Brand Partners</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          className="h-1.5 bg-primary mx-auto mt-4 rounded-full"
        />
      </div>

      <div className="cursor-target bg-background" style={{ height: '600px', position: 'relative' }}>
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
      <Events />
      <Contact />
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
