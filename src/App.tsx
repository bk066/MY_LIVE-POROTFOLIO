/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LoadingSequence from './components/LoadingSequence';
import { Navigation, Footer, ScrollProgress } from './components/Layout';
import Scene3D from './components/Scene3D';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Technical = lazy(() => import('./pages/Technical'));
const Business = lazy(() => import('./pages/Business'));
const Observer = lazy(() => import('./pages/Observer'));
const Contact = lazy(() => import('./pages/Contact'));
const MapPage = lazy(() => import('./pages/Map'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Security = lazy(() => import('./pages/Security'));

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingSequence onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <Scene3D />
        {/* Kinetic Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-slate-200/20 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-slate-100/30 blur-[100px] rounded-full"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollProgress />
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<div className="h-screen flex items-center justify-center font-mono text-[10px] tracking-widest text-slate-300">LOADING...</div>}>
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/technical" element={<PageTransition><Technical /></PageTransition>} />
                <Route path="/business" element={<PageTransition><Business /></PageTransition>} />
                <Route path="/observer" element={<PageTransition><Observer /></PageTransition>} />
                <Route path="/map" element={<PageTransition><MapPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
