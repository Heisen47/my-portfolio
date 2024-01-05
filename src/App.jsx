import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Socials,
} from "./components";
import { Analytics } from "@vercel/analytics/react";
import LazyLoad from "react-lazy-load";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <Socials />
          <StarsCanvas />
        </div>
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
