import React, { useState, useEffect, Suspense } from "react";
import "./assets/Style/Index.css";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";

//Halaman
// import Home from "./assets/Pages/Home";
// import { Tentang } from "./assets/Pages/Tentang";

const Home = React.memo(React.lazy(() => import("./assets/Pages/Home")))
const Tentang = React.memo(React.lazy(() => import("./assets/Pages/Tentang")))
const Graduation = React.memo(React.lazy(() => import("./assets/Pages/Graduation")))
const Portofolio = React.memo(React.lazy(() => import("./assets/Pages/Portofolio")))
const Achievement = React.memo(React.lazy(() => import("./assets/Pages/Achievement")))
const Contact = React.memo(React.lazy(() => import("./assets/Pages/Contact")))


import { AnimatePresence, motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loading loading-infinity text-primary loading-lg"></div>
    </div>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Memulai dari luar layar kiri
  },
  in: {
    opacity: 1,
    x: 0, // Memasuki layar
  },
  out: {
    opacity: 0,
    x: "100vw", // Keluar ke kanan
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  dumping: 20,
  duration: 0.3,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/aboutme"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Tentang />
              </motion.div>
            }
          />
          <Route
            path="/graduation"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Graduation />
              </motion.div>
            }
          />
          <Route
            path="/portofolio"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Portofolio />
              </motion.div>
            }
          />

          <Route
            path="/achievement"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Achievement />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>


      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);

  const texts = ["Welcome to the site!", "Explore our features!", "Get started with us!"];

  return (
    <Router>
      <AnimatedRoutes loading={loading} texts={texts} />
    </Router>
  );
}

export default App;
